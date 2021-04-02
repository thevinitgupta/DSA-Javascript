/**
 *! Given a 2D integer array matrix, return the transpose of matrix.
**The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 */

class Matrix{
   static transpose(matrix){
        let m = matrix.length;
        let n = matrix[0].length;
        console.log("Original matrix :");
        Matrix.printMatrix(matrix,m,n);
        let transpose = [];

        //!slow solution
        for(let i =0;i<n;i++){
            let arr= [];
               for(let j=0;j<m;j++){
                   arr.push(matrix[j][i]);    
               }
               console.log("Row :",arr);
            transpose.push([...arr]);
        }
        console.log("Transpose matrix :");
       Matrix.printMatrix(transpose,n,m);

        //?faster solution 
        return matrix[0].map((_,  i) => matrix.map(b => b[i]));
       
   }
   static printMatrix(mat,n,m){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            process.stdout.write(mat[i][j]+" ");
        }
        process.stdout.write("\n");
    }
}
}

Matrix.transpose([[1,2,3],[4,5,6],[7,8,9]]);
Matrix.transpose([[1,2,3],[4,5,6]]);