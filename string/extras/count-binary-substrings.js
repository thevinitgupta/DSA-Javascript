class Solution {

    //!time limit exceeded -> O(n^3)
    // static countBinarySubstrings(s){
    //     let count = 0;
    // for(let i=0;i<s.length;i++){
    //     for(let j=i+1;j<s.length;j=j+2){
    //         let currStr = s.slice(i,j+1);
    //         let mid = Math.floor((currStr.length)/2);
    //         let mid2 = mid-1;
    //         let midVal = currStr[mid],mid2Val=currStr[mid2];
    //         let valid = false;
    //         if(midVal!==mid2Val){
    //             valid = true;
    //             console.log(currStr," -> ",currStr.length)
    //         while(mid2>=0&&mid<currStr.length){
    //             console.log("Checking for ",mid," & ",mid2);
    //             if(currStr[mid2]===mid2Val && midVal===currStr[mid]) {
    //                 mid++;mid2--;
    //             }
    //             else {
    //                 valid = false;
    //                 break;
    //             }
    //         }
    //         }
    //         if(valid) count++;
    //         console.log("Count for i=",i," ->",count)
    //     }
    // }
    // return count;
    // }

    //?little faster
    // static countBinarySubstrings(s){
    //     let groups = [];
    //     let count = 0,prev = s[0],currCount=0;
    //     for(let i=0;i<s.length;i++){
    //         if(prev!==s[i]) {
    //             groups.push(currCount);
    //             prev=s[i];
    //             currCount=0;
    //         }
    //         currCount++;
    //     }
    //     groups.push(currCount)
    //     console.log(groups);
    //     for(let i=0;i<groups.length-1;i++){
    //         count += Math.min(groups[i],groups[i+1])
    //     }
    //     return count;
    // }

    //*almost same as above -> O(N) more than 45%
    static countBinarySubstrings(s){
        let prevB =0,currB=1,curr = s[0],count = 0;
        for(let i=1;i<s.length;i++){
            if(s[i]===curr) currB++;
            else {
                count += Math.min(currB,prevB);
                prevB = currB;
                currB=1;
            }
            curr = s[i];
        }
        count += Math.min(currB,prevB);
        return count;
    }
}

console.log("Final Count Returned -> ",Solution.countBinarySubstrings("00110011"))
console.log("Final Count Returned -> ",Solution.countBinarySubstrings("10101"))