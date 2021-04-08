/**
 ** 1XY2 is a valid shuffle of XY and 12
 ** Y12X is not a valid shuffle of XY and 12
*?In the above example, we have a string array named results. It contains two strings: 1XY2 and Y12X. We are checking if these two strings are valid shuffle of strings first(XY) and second(12).

*?Here, the program says 1XY2 is a valid shuffle of XY and 12. However, Y12X is not a valid shuffle.

*!This is because Y12X has altered the order of string XY. Here, Y is used before X. Hence, to be a valid shuffle, the order of string should be maintained.
 */

class Shuffle {
    static checker(s1,s2,res){
        let l1 = s1.length;
        let l2 = s2.length;
        let l = res.length;
        if((l1+l2)!==l) return false;
        let i=0,j=0,k=0;
        while(k<l){
            if(i<l1 && s1[i]===res[k]) i++;
            else if(j<l2 && s2[j]===res[k]) j++;
            else return false;
            k++;
        }
        return true;
    }
}

console.log(Shuffle.checker("XY","12","X12Y"))// RETURNS -> true
console.log(Shuffle.checker("XY","12","1XY2"))// RETURNS -> true
console.log(Shuffle.checker("XY","12","1X2Y"))// RETURNS -> true
console.log(Shuffle.checker("XY","12","Y12X"))// RETURNS -> false
console.log(Shuffle.checker("XY","12","2X1Y"))// RETURNS -> false