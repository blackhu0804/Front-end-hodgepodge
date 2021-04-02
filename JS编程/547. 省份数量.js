/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// 并查集
var findCircleNum = function(isConnected) {
  let i = -1;
  let unionFind = new UnionFind(isConnected.length);

  while(++i < isConnected.length) {
    for (let j = i+1; j < isConnected.length; j++) {
      if (isConnected[i][j]) unionFind.union(i, j);
    }
  }

  return unionFind.parent.filter((item, index) => item === index).length;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    while(n--) this.parent[n] = n;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) this.parent[rootX] = rootY;
  }

  find(x) {
    while(x !== this.parent[x]) {
      x = this.parent[x];
    }
    return x;
  }
}


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))