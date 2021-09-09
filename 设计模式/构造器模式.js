function User(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const user1 = new User('black', 18, 'developer');
const user2 = new User('red', 20, 'QA');

console.log(user1);
console.log(user2);