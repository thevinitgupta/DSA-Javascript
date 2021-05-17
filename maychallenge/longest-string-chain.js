/**
 * Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

 
 */


/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
    let W = Array.from({length: 17}, _ => new Set())
    for (let i = 0; i < words.length; i++) 
        W[words[i].length].add(words[i])
    let dp = new Map(), best = 1
    for (let i = 16; i; i--) {
        if (!W[i-1].size) continue
        for (let word of W[i]) {
            let wVal = dp.get(word) || 1
            for (let j = 0; j < word.length; j++) {
                let pred = word.slice(0,j) + word.slice(j+1)
                if (W[i-1].has(pred) && wVal >= (dp.get(pred) || 1)) {
                    dp.set(pred, wVal + 1)
                    best = Math.max(best, wVal + 1)
                }
            }
        }
    }
    return best
};