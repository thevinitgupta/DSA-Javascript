//!brute force solution
// var arrangeWords = function(text) {
//     text = text.toLowerCase().split(" ");
//     for(let i =0;i<text.length;i++){
//         text[i] = [text[i],i];
//     }
//     text = Sort.mergeSort(text);
//     let res = "";
//     for(let i=0;i<text.length;i++){
//         res += text[i][0];
//         if(i!==text.length-1) res += " ";
//     }
//     res = res[0].toUpperCase() + res.substring(1,res.length)
//     return res;
// };

// class Sort {
//     static mergeSort(arr){
//       let len = arr.length;
//       if(len<=1) return arr;
//       let mid = Math.floor(len/2);
//       let left = arr.slice(0,mid);
//       let right = arr.slice(mid,len);
//         return Sort.mergeIncrease(
//             Sort.mergeSort(left,"i"),
//             Sort.mergeSort(right,"i")
//           );      
//     }
//     static mergeIncrease(leftArr,rightArr){
//         const lLen = leftArr.length;
//         const rLen = rightArr.length;
//         let i=0,j=0;
//         let merged = [];
//         while(i<lLen&&j<rLen){
//             if(leftArr[i][0].length<rightArr[j][0].length){
//                 merged.push(leftArr[i]);
//                 i++;
//             }
//            else if(leftArr[i][0].length>rightArr[j][0].length){
//                 merged.push(rightArr[j]);
//                 j++;
//             }
//             else {
//                 if(leftArr[i][1]<rightArr[j][1]){
//                     merged.push(leftArr[i]);
//                 i++;
//                 }
//                 else {
//                     merged.push(rightArr[j]);
//                     j++;
//                 }
                
//             }
//         }
//         return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
//     }
// }

//*fastest solution
var arrangeWords = function(text) {
    const newOrder = text
     .toLowerCase()
     .split(' ')
     .sort((a, b) => {
       return a.length < b.length ? -1 : 1
     })
     .join(' ')

   return newOrder.charAt(0).toUpperCase() + newOrder.slice(1)
   
};