function step(cost) {

    let len = cost.length;
    if (len <= 2) {
        return 0;
    }
    let dp = [cost[0],cost[1]]; 
    for (let i = 2; i < len; i++) {
        let curr = Math.min(dp[i-1],dp[i-2]) + cost[i];
        dp.push(curr);
    }
    return Math.min(dp[len - 1],dp[len - 2]);
};
// function step(arr) {
//     let length = arr.length
//     let jump = []
//     for(let i = 0; i < length;i++) {
//         arr[i] < arr[i + 1] ? jump.push(arr[i]) : jump.push(arr[i+1]) && i++
//     }
//     return jump.reduce( (a,b) => {
//         return a + b
//     })
// }
console.log(step([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
