/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

class Profit {
    static stock(prices){
        let minPrice = 100001;
        let maxProfit = 0;
        let len = prices.length;
        for(let i=0;i<len;i++){
            if(prices[i]<minPrice) minPrice = prices[i];
            if(prices[i]-minPrice>maxProfit) maxProfit = prices[i]-minPrice;
        }
        return maxProfit;
    }

}

  /*
  NOt passing all test cases
    static mergingProcess(prices){
        let len = prices.length;
        for(let i=0;i<len-1;i++){
            let subArr = Sort.mergeSort(prices.slice(i+1,len));
            console.log(prices[i],subArr)
            if(prices[i]<subArr[0]&&prices[i]<subArr[subArr.length-1]) return (subArr[subArr.length-1]-prices[i]);
        }
        return 0;
    }
class Sort {
    static mergeSort(arr){
      let len = arr.length;
      if(len<=1) return arr;
      let mid = Math.floor(len/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,len);
      
      return Sort.merge(
        Sort.mergeSort(left),
        Sort.mergeSort(right)
      );
    }
    static merge(leftArr,rightArr){
        const lLen = leftArr.length;
        const rLen = rightArr.length;
        let i=0,j=0;
        let merged = [];
        while(i<lLen&&j<rLen){
            if(leftArr[i]<rightArr[j]){
                merged.push(leftArr[i]);
                i++;
            }
           else {
                merged.push(rightArr[j]);
                j++;
            }
        }
        return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
    }
}
*/

console.log(Profit.stock([7,1,5,3,6,4]));
console.log(Profit.mergingProcess([7,1,5,3,6,4]));
console.log(Profit.mergingProcess([2,4,1]));