class MedianRowSortedMatrix{
    static quickSortMethod(matrix,r,c){
        let i=1;
        let k=0,l=0;
        let len = r*c;
        let arr = [];
        while(i<=len){
            arr.push(matrix[k][l]);
            if(i%r == 0){
                k = i/r;
                l=0;
            }
            else {
                l++;
            }
            i++;
        }
        for(i=0;i<len;i++){
            console.log(arr[i]+" ");

        }
        arr = arr.sort((a,b) => a-b);
        return arr[(len-1)/2];
    }
}

console.log("Median :",MedianRowSortedMatrix.quickSortMethod([[1, 3, 5],[2, 6, 9],[3, 6, 9]],3,3));