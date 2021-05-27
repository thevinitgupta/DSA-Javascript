/**
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    words.sort((a,b) => b.length - a.length)
    let best = 0, bitsets = new Uint32Array(words.length)
    for (let i = 0; i < words.length; i++) {
        let word = words[i], wlen = word.length, bitset = 0
        if (wlen * words[0].length < best)
            return best
        for (let j = 0; j < wlen; j++)
            bitset |= 1 << (word.charCodeAt(j) - 97)
        for (let j = 0; j < i; j++)
            if ((bitsets[j] & bitset) === 0)
                best = Math.max(best, wlen * words[j].length)
        bitsets[i] = bitset
    }
    return best
};

//* faster than 45%

const getAllData = (list) => { // linkedlist -> array
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};
var nextLargerNodes = function(head) {
    let a = getAllData(head);
    let n = a.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let tmp = 0;
        for (let j = i + 1; j < n; j++) {
            if (a[j] > a[i]) {
                tmp = a[j];
                break;
            }
        }
        res.push(tmp);
    }
    return res;
};