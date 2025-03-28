/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
const cancellable = (generator) => {
    // Define a variable `cancel` to store the cancellation function
    let cancel;

    // Create a promise that will be rejected when cancellation is requested
    const cancelPromise = new Promise((_, reject) => {
        // Define the cancellation function that rejects the promise with a "Cancelled" message
        cancel = () => reject("Cancelled");
    });

    // Ensure that every Promise rejection has to be caught to prevent unhandled promise rejection warnings
    cancelPromise.catch(() => {});

    // Execute the generator function asynchronously
    const promise = (async () => {
        // Start the generator
        let next = generator.next();

        // Continue executing the generator until it is done
        while (!next.done) {
            try {
                // Wait for the next yielded value from the generator or for cancellation
                next = generator.next(await Promise.race([next.value, cancelPromise]));
            } catch (e) {
                // If an error is thrown (e.g., due to cancellation), throw it back into the generator
                next = generator.throw(e);
            }
        }

        // When the generator is done, return its final value
        return next.value;
    })();

    // Return an array containing the cancellation function and the promise
    return [cancel, promise];
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
