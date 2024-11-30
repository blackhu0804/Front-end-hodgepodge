class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, ...args) {
        for (const listener of this.events[type]) {
            listener(...args);
        }
    }

    once(type, listener) {
        const callback = (...args) => {
            this.off(type, callback);
            listener(...args);
        }
        this.on(type, callback);
    }

    off(type, listener) {
        if (!this.events[type]) return;
        this.events[type].filter(l => {
            l !== listener;
        })
    }
}

const e = new EventEmitter()

const callback = x => { console.log('Click', x.id) }
e.on('click', callback)
e.on('click', callback)

// 只打印一次
const onceCallback = x => console.log('Once Click', x.id)
e.once('click', onceCallback)
e.once('click', onceCallback)

//=> 3
e.emit('click', { id: 3 })

//=> 4
e.emit('click', { id: 4 })