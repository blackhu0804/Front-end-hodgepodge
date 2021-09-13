class SingleDog {
    show() {
        console.log('我是一个单例对象')
    }

    static getInstance() {
        if (SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }

        return SingleDog.instance;
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
s1 === s2

/**
 * 实现一个 Storage 的单例模式
 */
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem('name', 'black');

storage1.getItem('name'); // black
storage2.getItem('name'); // black

console.log(storage1 === storage2); // true