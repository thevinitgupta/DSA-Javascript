/**
 * Given a binary tree, we install cameras on the nodes of the tree. 

Each camera at a node can monitor its parent, itself, and its immediate children.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
    let ans = 0
    const dfs = node => {
        if (!node) return 0
        let val = dfs(node.left) + dfs(node.right)
        if (val === 0) return 3
        if (val < 3) return 0
        ans++
        return 1
    }
    return dfs(root) > 2 ? ans + 1 : ans    
};