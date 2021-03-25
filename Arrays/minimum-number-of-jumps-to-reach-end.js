class ReachEnd {
    static  max( x, y) 
    { 
        return (x > y) ? x : y; 
    } 
    static withMinJumps(arr){
        let n = arr.length;
        if (n <= 1) 
         return 0; 
   
     // Return -1 if not possible to jump 
     if (arr[0] == 0) 
         return -1; 
   
     // initialization 
     // stores all time the maximal 
     // reachable index in the array. 
     let maxReach = arr[0]; 
   
     // stores the number of steps 
     // we can still take 
     let step = arr[0]; 
   
     // stores the number of jumps 
     // necessary to reach that maximal 
     // reachable position. 
     let jump = 1; 
   
     // Start traversing array 
     let i = 1; 
     for (i = 1; i < n; i++) {
        console.log("Max Reach :",maxReach," Jumps :",jump," Steps left :",step);
        console.log("Arr[i] :",i," : ",arr[i]);
         // Check if we have reached the end of the array 
         if (i == n - 1) 
             return jump; 
   
         // updating maxReach 
         maxReach = ReachEnd.max(maxReach, i + arr[i]); 
   
         // we use a step to get to the current index 
         step--; 
   
         // If no further steps left 
         if (step == 0) { 
             // we must have used a jump 
             jump++; 
   
             // Check if the current index/position or lesser index 
             // is the maximum reach from the previous indexes 
             if (i >= maxReach) 
                 return -1; 
   
             // re-initialize the steps to the amount 
             // of steps to reach maxReach from position i. 
             step = maxReach - i; 
         } 
     } 
   
     return -1; 
    }
}

// 47 76 55 13 2 48 46 27 12 37(9) 99 25 48 83 20 77 13 9 35 55(19) 62 76 57 18 72 64 10 4 64 74(29) 63 77 15 18(33) 
// 91 84 32 36 77 10 39 75 35 87(43) 23 22 30 37(47) 31 65 58 59 7 14(53) 78 79 45 54 83 8 94 12 86 9 97 42 93 95(67) 
// 44 70 5 83 10 40 36 34 62 66 71 59 97 95 18 3 8 62 48 19 15 98 28 8 9 (92)

console.log("Min Jumps :",ReachEnd.withMinJumps([1, 4, 3, 2, 6, 7]));
//console.log("Min Jumps :",ReachEnd.withMinJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))
//console.log("3",ReachEnd.withMinJumps([32, 54 ,12 ,52, 56, 8, 30, 44, 94, 44, 39, 65, 19, 51, 91, 1 ,5, 89 ,34, 25, 58, 20, 51 ,38, 65 ,30, 7, 20, 10 ,51, 18, 43, 71, 97, 61 ,26, 5, 57, 70, 65, 0, 75 ,29, 86 ,93, 87, 87, 64, 75, 88, 89, 100, 7 ,40, 37, 38, 36, 44, 24, 46, 95, 43, 89, 32, 5, 15, 58, 77, 72 ,95, 8, 38, 69, 37, 24, 27 ,90 ,77, 92, 31, 30, 80 ,30, 37]))