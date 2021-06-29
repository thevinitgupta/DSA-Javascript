/**
 * @param {number[][]} mat
 * @return {number[][]}
 */


 var diagonalSort = function(mat) {
    let m = mat[0].length,n=mat.length;
    console.log("Original Matrix : ");
    console.table(mat)
    const sort = function(i,j){
        let a=i,b=j;
        let diag = [];
        while(a<n && b<m){
            diag.push(mat[a][b]);
            a++;b++;
        }
        diag.sort((a,b)=>a-b);
        a=i;b=j;
        let count = 0;
        while(a<n&& b<m){
            mat[a][b] = diag[count];
            count++;
            a++;b++;
        }
    }
    for(let i=0;i<m-1;i++){
        sort(0,i)
    }
    for(let i=1;i<n-1;i++){
        sort(i,0)
    }
    console.log("\n\nSorted Matrix :");
    console.table(mat);
    return mat;
};

diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2],[2,1,4,0]]);