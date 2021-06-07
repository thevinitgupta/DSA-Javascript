/**
 * Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//*O(N) solution
 var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for(let i=0;i<candies.length;i++){
        max = max>candies[i] ? max : candies[i];
    }
    let bool = [];
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >= max) bool.push(true);
        else bool.push(false);
    }
    return bool;
};