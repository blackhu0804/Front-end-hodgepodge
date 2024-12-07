/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 使用单调栈 逆序遍历
var dailyTemperatures = function(temperatures) {
    const result = [];
    const stack = [];
    for (let i = temperatures.length - 1 ; i >= 0; i--) {
        // 如果栈不为空，且当前温度大于栈顶温度，出栈
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        // 如果栈为空，说明后面没有比当前温度高的，直接赋值0
        // 如果栈不为空，说明当前栈顶元素就是比当前温度高的，计算索引差
        result[i] = stack.length ? stack[stack.length - 1] - i : 0;
        // 将当前温度索引入栈
        stack.push(i);
    }

    return result;
};

