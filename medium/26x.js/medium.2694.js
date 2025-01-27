class EventEmitter {
    constructor() {
        this._events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        (this._events[eventName] || (this._events[eventName] = [])).push(callback);
        //         return this;
        return {
            unsubscribe: () => {
                this._events[eventName] = this._events[eventName].filter((cb) => cb !== callback);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        (this._events[eventName] || []).slice().reduce((result, lsn) => {
            result.push(lsn(...args));
            return result;
        }, []);
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// class EventEmitter {
//     constructor() {
//         this._events = {};
//     }
//     subscribe(e, listener) {
//         (this._events[e] || (this._events[e] = [])).push(listener);
//         return this;
//     }
//     emit(e, prop) {
//         (this._events[e] || []).slice().forEach((lsn) => lsn(prop));
//     }
// }
