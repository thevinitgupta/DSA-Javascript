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
        for(let i =0;i<n;i++){
            let arr= [];
               for(let j=0;j<m;j++){
                   arr.push(matrix[j][i]);    
               }
               console.log("Row :",arr);
            transpose.push([...arr]);
        }
    // for(let i =0;i<m;i++){
    //        for(let j=0;j<n;j++){
    //            console.log("For ",i,",",j," <--> ",j,",",i,);
    //            console.log("Matrix[",i,"][",j,"] -> ",matrix[i][j]);
    //           transpose[j][i] = matrix[i][j];
    //           console.log("Transpose[",j,"][",i,"] -> ",transpose[j][i]);     
    //        }
    //        console.log("Transpose ->",transpose[i]);
    //    }
       console.log("Transpose matrix :");
       Matrix.printMatrix(transpose,n,m);
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