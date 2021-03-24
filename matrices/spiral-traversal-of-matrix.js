const process = require("process");
let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
//[13,14,15,16]];
for(let i =0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
        process.stdout.write(mat[i][j].toString()+" ");
    }
    process.stdout.write("\n");
}

class Matrix{
    static spirallyTraverse(matrix, r, c){
        let i, k = 0, l = 0;
        let list = [];
    /*
        k - starting row index
        r - ending row index
        l - starting column index
        c - ending column index
        i - iterator  
    */

    while (k < r && l < c) {
        // print the first row from the remaining rows
        for (i = l; i < c; ++i) {
            list.push(matrix[k][i]);
        }
        k++;

        // print the last column from the remaining columns
        for (i = k; i < r; ++i) {
            list.push(matrix[i][c - 1]);
        }
        c--;

        // print the last row from the remaining rows
        if (k < r) {
            for (i = c - 1; i >= l; --i) {
                list.push(matrix[r - 1][i]);
            }
            r--;
        }

        // print the first column from the remaining columns
        if (l < c) {
            for (i = r - 1; i >= k; --i) {
                list.push(matrix[i][l]);
            }
            l++;
        }
    }
    return list;
    }
}

//console.log("\n\nSpiral Traversal :\n",Matrix.spirallyTraverse( [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4,4));
console.log("\n\nSpiral Traversal :\n",Matrix.spirallyTraverse( [[1,2,3,4],[5,6,7,8],[9,10,11,12]],3,4));