/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid: string[][]): number {
  let res = 0;
  const rows = grid.length;
  const cols = grid[0] && grid[0].length;
  if (rows === 0 || (cols === 0 && rows === 0)) {
    return res;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        res++;
        dfs(grid, i, j)
      }
    }
  };

  return res;
};

function dfs(grid: string[][], i: number, j: number): void {
  const rows = grid.length;
  const cols = grid[0].length;
  grid[i][j] = "0";

  // 左
  if (i - 1 >= 0 && grid[i - 1][j] === '1') {
    dfs(grid, i - 1, j);
  }

  // 上
  if (j - 1 >= 0 && grid[i][j - 1] === '1') {
    dfs(grid, i, j - 1);
  }

  // 右
  if (i + 1 < rows && grid[i + 1][j] === '1') {
    dfs(grid, i + 1, j);
  }

  // 下
  if (j + 1 < cols && grid[i][j + 1] === '1') {
    dfs(grid, i, j + 1);
  }
}
// @lc code=end

