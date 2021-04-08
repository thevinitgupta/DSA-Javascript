/**
 ** Write an efficient program to print all the duplicates and their counts in the input string 
 */

class Duplicates{
    static inString(str){
        if(str.length<=1) return {};
        let dup = {};
        let currChar ="";
        for(let i =0;i<str.length;i++){
            currChar = str[i];
            if(dup.hasOwnProperty(currChar)) dup[currChar] = dup[currChar]+1;
            else dup[currChar] = 1;
        }
        console.log("Duplicates and their counts :");
        for(let prop in dup){
            if(dup[prop]===1) delete dup[prop];
            else {
                console.log("For ",prop," -> count = ",dup[prop]);
            }
        }
        return dup;
    }
}

Duplicates.inString("geeksforgeeks");
Duplicates.inString("g");