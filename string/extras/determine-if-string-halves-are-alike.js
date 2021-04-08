class Solution {

    //slowest solution with most efficient space
    static halvesAreAlike(s){
        let vowels = "aeiouAEIOU";
        let mid = s.length / 2, ans = 0
    for (let i = 0, j = mid; i < mid; i++, j++)
        ans += vowels.includes(s.charAt(i)) - vowels.includes(s.charAt(j))
    return ans === 0
    }

    
    // static halvesAreAlike(s){
    //     let mid = (s.length)/2;
    //     let a = s.substr(0,mid);
    //     let b = s.substr(mid,mid);
    //     let reg = /[aeiou]/gi;
    //     a = a.match(reg);
    //     b = b.match(reg);

        //?faster than O(n^2)
        //? return (a&&b) ? a.length === b.length : a==null && b===null;


        //!slowest approach -> O(n^2)
        //! for(let i=0;i<mid;i++){
        //!    if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(a[i])) counta++;
        //!    if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(b[i])) countb++; 
        //! }
        //! return counta===countb;
    //}
}

console.log(Solution.halvesAreAlike("book"))
console.log(Solution.halvesAreAlike("textbook"))
console.log(Solution.halvesAreAlike("MerryChristmas"))
console.log(Solution.halvesAreAlike("AbCdEfGh"))