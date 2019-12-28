// async await 语法糖 相当于 generator + co
const fs = require('fs').promises;

async function read() {
  try {
    let content = await fs.readFile('name.txt', 'utf8');
    let age = await fs.readFile(content, 'utf8');
    return age;
  } catch (error) {
    console.log(error);
  }
};

read().then(data => {
  console.log(data);
}) 