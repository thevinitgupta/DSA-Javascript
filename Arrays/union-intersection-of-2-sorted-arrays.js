/*
Input : ([2,4,5,7],[1,4,6,9,10])
Output : Union -> [1,2,5,6,7,9,10]
         Intersection -> [4]
*/

const getUnionIntersection = function(arr1,arr2){
    const union =[];
    const intersec =[];
    arr1.forEach(curr => {
        if(arr2.indexOf(curr)===-1){
            if(union.indexOf(curr)===-1){
                union.push(curr);
            }
        }
        else {
            if(intersec.indexOf(curr)===-1){
                intersec.push(curr);
            }
        }
    });
    arr2.forEach(curr => {
        if(union.indexOf(curr)===-1){
            union.push(curr);
        }
    });
    union.sort((a,b) => a-b);
    intersec.sort((a,b) => a-b);
     return [union,intersec];
}

console.log(getUnionIntersection([2,4,5,7],[1,4,6,9,10]));