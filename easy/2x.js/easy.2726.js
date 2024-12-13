class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this._value = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this._value += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this._value = this._value - value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this._value *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this._value /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this._value = this._value ** value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this._value;
    }
}
