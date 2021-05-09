/**
 * Given an array of integers target. From a starting array, A consisting of all 1's, you may perform the following procedure :

let x be the sum of all elements currently in your array.
choose index i, such that 0 <= i < target.size and set the value of A at index i to x.
You may repeat this procedure as many times as needed.
Return True if it is possible to construct the target array from A otherwise return False.

 
**Example 1:

*?Input: target = [9,3,5]
*?Output: true
*?Explanation: Start with [1, 1, 1] 
*?[1, 1, 1], sum = 3 choose index 1
*?[1, 1, 3], sum = 5 choose index 2 -> sum = 5
*?[1, 5, 3], sum = 9 choose index 0 -> sum = 9, diff=8 
*?[9, 5, 3] Done -> sum = 17, diff = 17-9=8, 9-diff =1 -> sum = 9,target[2] =1; 
 */


/**
 * @param {number[]} target
 * @return {boolean}
 */
 var isPossible = function(target) {
    let heap = [,], sum = 0
    
    const heapify = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return top
    }
    
    for (let num of target) sum += num, heapify(num)
    while (heap[1] !== 1) {
        let num = extract()
        sum -= num
        if (num <= sum || sum < 1) return false
        num %= sum, sum += num, heapify(num)
    }
    return true
};

console.log(isPossible([9,3,5]))
console.log(isPossible([1,1,1,2]))
console.log(isPossible([8,5]))
