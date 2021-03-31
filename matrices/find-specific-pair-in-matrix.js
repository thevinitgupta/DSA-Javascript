const process = require("process");

class FindPair{
    static inMatrix(N,mat){
        //stores maximum value
        let maxValue = Number.MIN_VALUE;
    
        // maxArr[i][j] stores max of elements in matrix
        // from (i, j) to (N-1, N-1)
        let maxArr = new Array(N).fill(new Array(N));
        
        // last element of maxArr will be same's as of
        // the input matrix
        maxArr[N-1][N-1] = mat[N-1][N-1];
        
        // preprocess last row
        let maxv = mat[N-1][N-1];  // Initialize max
        for (let j = N - 2; j >= 0; j--)
        {
            console.log("Prev Max ->",maxv);
            if (mat[N-1][j] > maxv)
                maxv = mat[N - 1][j];
            console.log("Updated Max ->",maxv);
            maxArr[N-1][j] = maxv;
            FindPair.printMatrix(maxArr,N,N);
        }
        
        // preprocess last column
        maxv = mat[N - 1][N - 1];  // Initialize max
        for (let i = N - 2; i >= 0; i--)
        {   console.log("Prev Max ->",maxv);
            if (mat[i][N - 1] > maxv)
                maxv = mat[i][N - 1];
            console.log("Updated Max ->",maxv);
            maxArr[i][N - 1] = maxv;
            FindPair.printMatrix(maxArr,N,N);
        }
        
        // preprocess rest of the matrix from bottom
        for (let i = N-2; i >= 0; i--)
        {
            for (let j = N-2; j >= 0; j--)
            {
                // Update maxValue
                if (maxArr[i+1][j+1] - mat[i][j] > maxValue)
                    maxValue = maxArr[i + 1][j + 1] - mat[i][j];
                console.log("Max Value -> ",maxValue);
                // set maxArr (i, j)
                maxArr[i][j] = Math.max(mat[i][j],
                                   Math.max(maxArr[i][j + 1],
                                       maxArr[i + 1][j]) );
                FindPair.printMatrix(maxArr,N,N);
            }
        }
         
        return maxValue;
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

console.log(FindPair.inMatrix(5,[[ 1, 2, -1, -4, -20 ],[ -8, -3, 4, 2, 1 ],[ 3, 8, 6, 1, 3 ],[ -4, -1, 1, 7, -6 ],[ 0, -4, 10, -5, 1 ]]));