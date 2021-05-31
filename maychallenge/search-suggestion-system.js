/**Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed.  */

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(P, S) {
    P.sort()
    let ans = [], left = 0, right = P.length - 1
    for (let i = 0; i < S.length; i++) {
        let c = S.charAt(i), res = []
        while (P[left]?.charAt(i) < c) left++
        while (P[right]?.charAt(i) > c) right--
        for (let j = 0; j < 3 && left + j <= right; j++)
            res.push(P[left+j])
        ans.push(res)
    }
    return ans
};