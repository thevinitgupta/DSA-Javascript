const Sort = require("../Arrays/Extras/sorting-algorithms");

class SortMatrix{
    static sortedMatrix(N,Mat){
        let sorted = [];
        let k=0,l=0;
        let i = 1,len = N*N;
        while(i<=len){
            sorted.push(Mat[k][l]);
            if(i%N == 0){
                k = i/N;
                l=0;
            }
            else {
                l++;
            }
            i++;
        }
        sorted = Sort.quickSort(sorted);
        Mat = [];
        i=N;k=0;
        while(i<=len){
            if(i%N == 0){
                Mat[k] = [...sorted.slice(i-N,i)];
                k = i/N;
                i = i+N;
            }
            // i++;
        }
        console.log("Matrix :\n",Mat);
        console.log("\n\nSorted :",sorted);
    }
}

SortMatrix.sortedMatrix(4,[[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]]);