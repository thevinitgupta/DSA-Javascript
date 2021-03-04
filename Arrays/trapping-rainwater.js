/**
 * While considering total width, we need to subratract 1 unit for each block
 * 1, 4, 5, 2, 7, 6, 1, 4, 2, 3
 * 1 *
 * 1 * 
 * 5 * * * * *
 * 2 * * - - -           
 * 7 * * * * * * *                 
 * 6 * * * * * *                  
 * 1 * - - -              
 * 4 * * * *   
 * 2 * * -
 * 3 * * *           
 */

class TrappingRainwater {
    static bruteForce(arr,n){
        let water = 0;
        for(let i=1;i<n-1;i++){
            let lMax = Math.max(...arr.slice(0,i));
            let rMax = Math.max(...arr.slice(i+1,n));
            if(Math.min(lMax,rMax) > arr[i])
            water += Math.min(lMax,rMax) - arr[i];
        }
        return water;
    }

    //Time ->O(n) , Space ->O(n)
    static preComputing(arr,n){
        let lMax = [];
        let rMax = new Array(n);
        lMax.push(arr[0]);
        rMax[n-1]=arr[n-1];
        for(let i=1;i<n-1;i++){
            lMax.push(Math.max(lMax[i-1],arr[i]));
            rMax[n-i-1]=Math.max(rMax[n-i],arr[n-i-1]);
        }
        let water = 0;
        for(let i=0;i<n-1;i++){
            if(Math.min(lMax[i],rMax[i]) > arr[i])
            water += Math.min(lMax[i],rMax[i]) - arr[i];
        } 
        return water;
    }
}

//console.log(TrappingRainwater.bruteForce([8,8,2,4,5,5,1],7))
//console.log(TrappingRainwater.bruteForce([7,4,0,9],4))
//console.log(TrappingRainwater.bruteForce([3,0,0,2,0,4],6))
console.log(TrappingRainwater.bruteForce([1, 1, 5, 2, 7, 6, 1, 4, 2, 3],10));
console.log(TrappingRainwater.preComputing([1, 1, 5, 2, 7, 6, 1, 4, 2, 3],10));
