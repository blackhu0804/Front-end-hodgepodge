class EventEmitter {
    constructor() {
        this.handlers = {};
    }

    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(cb);
    }

    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(cb => {
                cb(...args);
            })
        }
    }

    off(eventName, cb) {
        const callbacks = this.handlers[eventName];
        const index = callbacks.indexOf(cb);
        if (index !== -1) {
            callbacks.splice(index, 1);
        }
    }

    once(eventName, cb) {
        const wrapper = (...args) => {
            cb.apply(...args);
            this.off(eventName, wrapper);
        }
        this.on(eventName, wrapper);
    }
}