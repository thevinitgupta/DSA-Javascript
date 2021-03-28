/**
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

class Solution {
    static maxArea(matrix,n,m){
        //code here
        let histogram = new Array(m).fill(0);
        
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j]===0){
                    histogram[j] = 0;
                }
                else {
                    histogram[j] += matrix[i][j];
                }
            }
            for(let j=0;j<m;j++){
                
            }
            console.log("For i:",i,",histogram :",histogram);
        }
    }
}

Solution.maxArea([[0 ,1, 1, 0],[1, 1, 1 ,1],[1 ,1 ,1 ,1],[1, 1, 0, 0]],4,4);