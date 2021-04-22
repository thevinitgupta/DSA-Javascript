/**
 ** Given a string s, find the length of the longest substring without repeating characters.
 */


class NonRepeating{
    static lengthOfLongestSubstring(s){
        let aPoint =0,bPoint = 0;
        let hash = {};
        let hashLen = 0;
        let max = 0;
        while(bPoint<s.length){
            if(hash[s[bPoint]]===undefined){
                console.log("hash before adding ->",hash);
                hash[s[bPoint]] =1;
                console.log("hash after adding ->",hash);
                hashLen++;
                console.log("hash length ->",hashLen);
                bPoint++;
                console.log("max before ->",max);
                max = Math.max(max,hashLen);
                console.log("max after ->",max); 
            }
            else {
                console.log("hash before deleting ->",hash);
                hash[s[aPoint]] = undefined;
                console.log("hash after deleting ->",hash);
                aPoint++;
                hashLen--;
                console.log("hash length ->",hashLen);
            }
        }
        return max;
    }
}

console.log(NonRepeating.lengthOfLongestSubstring("abcabcbb"))