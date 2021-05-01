/**
 * Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.
 */

/**
 * @param {string[]} words
 */
 var WordFilter = function(words) {
    this.dictionary = [...words];
    this.map = {};
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    this.map[prefix] = this.map[prefix] || {};
    this.map[prefix][suffix] = this.map[prefix][suffix] || null;
    
    
    if(this.map[prefix][suffix]!==null){
        return this.map[prefix][suffix];
    }
    
    const dictionary = this.dictionary;
    let pLen = prefix.length;
    let sLen = suffix.length;
    let index = -1;
    
    
    for(let i=dictionary.length-1;i>=0;i--){
        if(dictionary[i].substr(0,pLen)===prefix && dictionary[i].substr(dictionary[i].length-sLen)===suffix) {index = i;break;}
    }
    this.map[prefix][suffix] = index;
    return index;
};
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

 var obj = new WordFilter(['test','te24s2t'])
 var param_1 = obj.f("te","t")
 console.log("found at =>",param_1)

 /**
  * ["WordFilter","f","f","f","f","f","f","f","f","f","f"]
    [[["cabaabaaaa","ccbcababac","bacaabccba","bcbbcbacaa","abcaccbcaa","accabaccaa","cabcbbbcca","ababccabcb","caccbbcbab","bccbacbcba"]],["bccbacbcba","a"],["ab","abcaccbcaa"],["a","aa"],["cabaaba","abaaaa"],["cacc","accbbcbab"],["ccbcab","bac"],["bac","cba"],["ac","accabaccaa"],["bcbb","aa"],["ccbca","cbcababac"]]
  */