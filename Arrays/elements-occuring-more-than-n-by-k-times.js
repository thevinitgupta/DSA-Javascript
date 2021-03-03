const Sort = require("../Extras/sorting-algorithms");

class ElementsOccuring{
    static moreThanNdK(arr,N,k){
        let count = 0;
        arr = Sort.quickSort(arr);
        let comp = arr[0],prevPrinted;
        for(let i=0;i<N;i++){
            if(arr[i]===comp){
                count++;
                if(count>Math.floor(N/k)){
                    console.log("Element : ",comp);
                    comp = null;
                    count=0;
                }
            }
            else {
                comp = arr[i];
                count=1;
            }
        }
    }
}

ElementsOccuring.moreThanNdK([2,3, 1, 2, 2, 1,6,7,7,7, 2, 3, 3,3],14,7)
//[1, 1, 2, 2, 2, 2, 3, 3, 3, 3]