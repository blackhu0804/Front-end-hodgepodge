class Producer {
    constructor() {
        this.observers = [];
    }

    addListener(observer) {
        this.observers.push(observer);
    }

    removerListener(observer) {
        this.observers.splice(this.observers.indexOf(observer, 1));
    }

    notify(message) {
        this.observers.forEach(observer => {
            observer.update(message);
        })
    }
}

const subject = new Producer();

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(message, this.name);
    }
}

const o1 = new Observer('o1');
const o2 = new Observer('o2');
subject.addListener(o1);
subject.addListener(o2);

subject.notify('hello')