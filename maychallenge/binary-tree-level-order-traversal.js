/**
 ** Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)            
    }
    return ans
};