/**
 * *There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
**You have to form a team of 3 soldiers amongst them under the following rules:

*?Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
*!A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
*?Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
 */

class CountNumber{
    static bruteForce(rating){
        let len = rating.length;
    if(len<3) return 0;
    let teams = 0;
    for(let i =0;i<len-2;i++){
        for(let j =i+1;j<len-1;j++){
            for(let k = j+1;k<len;k++){
                if(rating[i] < rating[j] && rating[j]< rating[k]) teams++;
                if(rating[i] > rating[j] && rating[j]> rating[k]) teams++;
            }
        }
    }
    return teams;
    }
    static optimalApproach(rating){
        let len = rating.length;
    if(len<3) return 0;
    let teams = 0;
    for(let i =1;i<len-1;i++){
        let inc1=0,inc3=0,dec1=0,dec3=0;
        for(let j =0;j<len;j++){
            
            if(j<i){
                if(rating[j]<rating[i]) dec1++;
                else inc1++;
            }
            if(j>i){
                if(rating[j]<rating[i]) dec3++;
                else inc3++;
            }
        }
        teams +=(inc1*dec3);
        teams +=(inc3*dec1);
    }
    return teams;
    }
}



CountNumber.ofTeamsPossible([2,5,3,4,1])