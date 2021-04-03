/**
 * *Given an m x n matrix, find all common elements present in all rows in O(mn) time and one traversal of matrix.
*!Example: 
*!Input:
*!mat[4][5] = {{1, 2, 1, 4, 8},
*!             {3, 7, 8, 5, 1},
*!             {8, 7, 7, 3, 1},
*!             {8, 1, 2, 7, 9},
*!            };

*?Output: 
*?1 8 or 8 1
*?8 and 1 are present in all rows.
 */

const Sort = require("../Arrays/Extras/sorting-algorithms");
const Search = require("../Arrays/Extras/binary-search");
class Matrix{
    static commonElements(mat){
        for(let i=0;i<mat.length;i++){
            mat[i] = Sort.mergeSort(mat[i],"i");
            console.log("After sorting :",mat[i]);
        }
        let commons = [];
        let j=0;
        while(j<mat[0].length){
            console.log("To search ->",mat[0][j]);
            console.log("Commons till now ->",commons);
            let found=true;
                for(let i=1;i<mat.length;i++){
                    console.log("element to be searched ->",mat[0][j]);
                    console.log("In Array ->",mat[i]);
                   let loc = Search.binarySearch(mat[i],0,mat[0].length-1,mat[0][j]);
                    if(loc===-1) {
                        found=false;
                        break;
                    }
                }
            if(found && commons[commons.length-1]!==mat[0][j]) commons.push(mat[0][j]);
            j++;
        }
        console.log(commons);
    }
}

Matrix.commonElements([[1, 2, 1, 4, 8],[3, 7, 8, 5, 1],[8, 7, 7, 3, 1],[8, 1, 2, 7, 9]]);
Matrix.commonElements([[1, 2, 1, 4, 8],[3, 2, 8, 5, 1],[8, 2, 7, 3, 1],[8, 1, 2, 7, 9]]);
