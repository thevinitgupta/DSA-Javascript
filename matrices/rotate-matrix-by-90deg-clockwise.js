

class Matrix{

    //*Time -> O(n^2),Space -> O(1)
    static rotate(matrix) {
        let N = matrix.length;

        //!transpose of the matrix
        for(let i =0;i<N;i++){
            for(let j=i;j<N;j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        //? Reverse the matrix rows i.e., wrt mid column
        for(let i =0;i<N;i++){
            let start=0,end = N-1;
            while(start<end){
                let temp = matrix[i][end];
                matrix[i][end] = matrix[i][start];
                matrix[i][start] = temp;
                start++;
                end--;
            }
        }
        return matrix;
    }
}

console.log(Matrix.rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
