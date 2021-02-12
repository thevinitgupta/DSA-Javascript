/**
 * *Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

*!Notice that you may not slant the container.
 */

class Container {
    static withMostWater(height){
        let len = height.length;
        let max = 0;
        let i=0,j=len-1;
        while(i<j){
            console.log(`i : ${i}, j : ${j}`)
            let currArea = Math.min(height[i],height[j])*(j-i);
            max = Math.max(max,currArea);
            console.log(`curr : ${currArea}, max : ${max}`)
                if(height[i]<height[j]){
                    i++;
                }
                else {
                    j--;
                }
        }
       return max; 
    } 
}

console.log(Container.withMostWater([1,8,6,2,5,4,8,3,7]))
console.log(Container.withMostWater([8,20,1,2,3,4,5,6]))
console.log(Container.withMostWater([1,1]))