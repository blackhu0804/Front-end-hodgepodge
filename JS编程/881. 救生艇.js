/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
  people.sort((a, b) => {
    return a - b;
  });

  let i = 0;
  let j = people.length - 1;
  let result = 0;
  while(i <= j) {
    let flag = limit - people[j];
    j--;
    if (flag >= people[i]) {
      flag -= people[i];
      i++;
    } 
    result++;
  }

  return result;
};

console.log(numRescueBoats([1, 2], 3))