/**
 * Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 
 */


class Solution {

    //!O(n^2) solution accepted
    // static suggestedProducts(products, searchWord) {
    //     let suggestions = [];
    // products.sort();
    // for(let i=0;i<searchWord.length;i++){
    //     let currSuggestions = [];
    //     for(let j=0;j<products.length;j++){
    //         if(products[j].startsWith(searchWord.substring(0,i+1))) currSuggestions.push(products[j]);
    //         if(currSuggestions.length===3) break;
    //     }
    //     suggestions.push(currSuggestions);
    // }
    // return suggestions;
    // }

    //?O(N) solution 
    static suggestedProducts(products, searchWord) {
        if (searchWord.length < 1) return [];

    let sortedProducts = products.sort();
    const result = [];

    for (let i = 0; i < searchWord.length; i += 1) {
        sortedProducts = sortedProducts.filter(product => product[i] === searchWord[i]);
        result.push(sortedProducts.slice(0, 3));
    }

    return result;
    }
}

console.log(Solution.suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse"))