/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  function helper(list) {
    let dp = new Array(list.length).fill(0);
    dp[0] = list[0];
    dp[1] = Math.max(list[0], list[1]);

    for (let i = 2; i < list.length; i++) {
      dp[i] = Math.max(dp[i - 2] + list[i], dp[i - 1]);
    }
    return dp[list.length - 1];
  }

  return Math.max( helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));
};

console.log(rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]))