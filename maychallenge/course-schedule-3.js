/**
 * There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.

You will start on the 1st day and you cannot take two or more courses simultaneously.

Return the maximum number of courses that you can take.
 */


/**
 * @param {number[][]} courses
 * @return {number}
 */


//!install using -> npm install --save @datastructures-js/priority-queue
 const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] - b[1])
    let total = 0, pq = new MaxPriorityQueue({priority: x => x})
    console.log(pq)
    for (let [dur, end] of courses)
        if (dur + total <= end)
            total += dur, pq.enqueue(dur)
        else if (pq.front() && pq.front().element > dur)
            total += dur - pq.dequeue().element, pq.enqueue(dur)
    return pq.size()
};





console.log(scheduleCourse([[5,5],[4,6],[2,6]]));
console.log(scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]]));