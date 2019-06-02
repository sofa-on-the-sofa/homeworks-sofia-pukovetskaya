/* Создать функцию, которая возвращает промис.  Функция принимает
два аргумента - время, через которое промис должен выполниться,
и значение, с которым промис будет выполнен. 

function promiseCreator(...) {...}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok! */
function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    })
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);


/* Создать класс, который производит экземпляр со следующими свойствами:
- promise - промис, который создается во время запуска конструктора;
- reject - метод, при выполнении которого promise реджектится;
- resolve - метод, при выполнении которого promise резолвится.

class Prom {...}
const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve('test'), 5000)
→  test */
class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        })
    }

    resolve(value) {
        this.resolve(value);
    }

    reject(error) {
        this.reject(error);
    }
}

const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve('test'), 5000);
