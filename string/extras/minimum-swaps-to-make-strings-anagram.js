class Solution{
    static minSteps(s,t){
        let map = {}
    let count = 0;
    for (let char of s) {
        map[char] = ++map[char] || 1
    }
    for (let word of t) {
        if (map[word]) {
            map[word]--;
            continue;
        }
        count++;
    }
    return count;
}
}


console.log(Solution.minSteps("gctcxyuluxjuxnsvmomavutrrfb",  "qijrjrhqqjxjtprybrzpyfyqtzf"))