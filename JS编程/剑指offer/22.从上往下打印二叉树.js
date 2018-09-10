/**
 * 
 * @param {*} root 
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    let array = []
    let data = []
    if(root !== null) {
        array.push(root)
    }
    while(array.length) {
        let node = array.shift()
        if(node.left) {
            array.push(node.left)
        }
        if(node.right) {
            array.push(node.right)
        }
        data.push(node.val)
    }
    return data
}