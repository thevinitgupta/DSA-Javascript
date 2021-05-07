/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length
    if (m < n) [word1, word2, m, n] = [word2, word1, n, m]
    let WA1 = word1.split(""), WA2 = word2.split(""),
        dpLast = new Uint16Array(n + 1),
        dpCurr = new Uint16Array(n + 1)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) 
            dpCurr[j+1] = WA1[i] === WA2[j]
                ? dpLast[j] + 1
                : Math.max(dpCurr[j], dpLast[j+1]);
        [dpLast, dpCurr] = [dpCurr, dpLast]
    }
    return m + n - 2 * dpLast[n] 
};

minDistance("leetcode","detco");