function User(name, age, job, work) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.work = work;
}

function Factory(name, age, job) {
    let work;
    switch (job) {
        case 'developer':
            work = ['coding', 'fix'];
        case 'QA':
            work = ['test', 'Mention the bug'];
            // ...
    }

    return new User(name, age, job, work);
}

const user1 = new Factory('black', 18, 'developer');
const user2 = new Factory('red', 20, 'QA');

console.log(user1);
console.log(user2);