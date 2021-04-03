/**
 * You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.

For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain the keys "name" and "age".
You know the values of a wide range of keys. This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will:

Replace keyi and the bracket pair with the key's corresponding valuei.
If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark "?" (without the quotation marks).
Each key will appear at most once in your knowledge. There will not be any nested brackets in s.

Return the resulting string after evaluating all of the bracket pairs.
 */

function evaluate(s, knowledge) {
    let reg = /(?<=\()\w+(?=\))/g;

    let keys = s.match(reg);
    console.log(keys)
    let j=0;
    let val;
    for(let i=0;i<keys.length;i++){
        console.log("For ",keys[i]);
        j=0;
        while(j<knowledge.length){

            if(knowledge[j][0]===keys[i]) {
                val = knowledge[j][1];
                console.log(knowledge[j][0], " matched!");
                j=j+1;
                break;
            }
            
            else {
                console.log(knowledge[j][0], " not matched!");
                val = "?";
                j++;
            }
        }
        s = s.replace(`(${keys[i]})`,val);
    }
    console.log(s)
    return s;
};

// evaluate("(name)is(age)yearsold",[["name","bob"],["age","two"]]);
// evaluate("(a)(a)(a)aaa",[["a","yes"]]);
evaluate("(fy)(kj)(ege)r",[["uxhhkpvp","h"],["nriroroa","m"],["wvhiycvo","z"],["qsmfeing","s"],["hbcyqulf","q"],["xwgfjnrf","b"],["kfipazun","s"],["wnkrtxui","u"],["abwlsese","e"],["iimsmftc","h"],["pafqkquo","v"],["kj","tzv"],["fwwxotcd","t"],["yzgjjwjr","l"]]);