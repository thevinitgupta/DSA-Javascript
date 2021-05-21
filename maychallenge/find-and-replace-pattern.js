/**
 * Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 
 */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let ans = [], codex = new Map()
    const translate = char => {
        if (!codex.has(char))
            codex.set(char, String.fromCharCode(97 + codex.size))
        return codex.get(char)
    }
    const compare = word => {
        codex.clear()
        for (let i = 0; i < word.length; i++)
            if (translate(word[i]) !== cipher[i])
                return
        ans.push(word)
    }
    let cipher = new Array(pattern.length)
    for (let i = 0; i < pattern.length; i++)
        cipher[i] = translate(pattern.charAt(i))
    words.forEach(compare)
    return ans
};