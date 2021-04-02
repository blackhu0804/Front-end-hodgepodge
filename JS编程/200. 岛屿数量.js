/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let unionFind = new UnionFind(m*n);
  let count0 = 0;
  for(let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') {
        count0++;
      } else {
        if (i > 0 && grid[i-1][j] === '1') unionFind.union(i*n+j, (i-1)*n+j);
        if (i < m-1 && grid[i+1][j] === '1') unionFind.union(i*n+j, (i+1)*n+j);
        if (j > 0 && grid[i][j-1] === '1') unionFind.union(i*n+j, i*n+j-1);
        if (j < n-1 && grid[i][j+1] === '1') unionFind.union(i*n+j, i*n+j+1);
      }
    }
  }
  return unionFind.unionCount - count0;
};

class UnionFind {
  constructor(n) {
    this.parents = new Array(n);
    this.unionCount = n;
    while(n--) this.parents[n] = n;
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      this.parents[rootX] = rootY;
      this.unionCount--;
    }
  }

  find(x) {
    while (x !== this.parents[x]) {
      x = this.parents[x];
    }
    return x;
  }
}

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))