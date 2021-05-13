/**
 * Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 */

/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    let ylen = matrix.length + 1, xlen = matrix[0].length + 1
        this.dp = Array.from({length: ylen}, () => new Array(xlen).fill(0))
        for (let i = 1; i < ylen; i++)
            for (let j = 1; j < xlen; j++)
                this.dp[i][j] = matrix[i-1][j-1] + this.dp[i-1][j] + this.dp[i][j-1] - this.dp[i-1][j-1]
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1] - this.dp[row2+1][col1] - this.dp[row1][col2+1] + this.dp[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */