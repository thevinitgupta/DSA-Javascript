/**
 ** You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

*?It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
 */

class Solution{
    //!Slower Solution 
    // static destCity(paths){
    //     let pos = {};
    //     for(let i=0;i<paths.length;i++){
    //         if(pos[paths[i][0]]) pos[paths[i][0]] += 0;
    //         else pos[paths[i][0]] = "0";
    //         if(pos[paths[i][1]]) pos[paths[i][1]] += 1;
    //         else pos[paths[i][1]] = "1";
    //     }
    //     for(let prop in pos){
    //         if(pos[prop].length===1 && Number(pos[prop])===1) return prop;
    //     }
    // }

    //?Time O(n^2) ->72 ms, faster than 99.10%,space -> 39.5 MB, less than 92.33%
    static destCity(paths){
        for(let i=0;i<paths.length;i++){
            let path = paths[i];
            let found = false;
            for(let j=0;j<paths.length;j++){
                if(path[1]===paths[j][0]){
                    found=true;
                    break;
                }
            }
            if(!found) return path[1];
        }
    }
} 


console.log(Solution.destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.log(Solution.destCity([["B","C"],["D","B"],["C","A"]]))
console.log(Solution.destCity([["A","Z"]]));