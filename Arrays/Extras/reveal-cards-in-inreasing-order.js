/**
 * *In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.

    **Initially, all the cards start face down (unrevealed) in one deck.
    **Now, you do the following steps repeatedly, until all cards are revealed:
        *?Take the top card of the deck, reveal it, and take it out of the deck.
        *?If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
        *?If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
    **Return an ordering of the deck that would reveal the cards in increasing order.
    **The first entry in the answer is considered to be the top of the deck.
 */
const Sort = require("./sorting-algorithms");
class RevealCards {
    static inIncreasingOrder(deck){
        deck = Sort.mergeSort(deck);
        let arranged = [];
        for(let i=deck.length-1;i>=1;i--){
            arranged.unshift(deck[i]);
            arranged = RevealCards.sendLastToFront(arranged);
        }
        arranged.unshift(deck[0]);
        return arranged;
    }
    static sendLastToFront(arr){
        arr = RevealCards.reverse(arr,0,arr.length-2);
        arr = RevealCards.reverse(arr,0,arr.length-1);
        return arr;
    }
    static reverse(arr,lb,ub) {
        while(lb<ub){
            let temp = arr[lb];
            arr[lb]=arr[ub];
            arr[ub] = temp;
            lb++;
            ub--;
        }
        return arr;
    }

}



console.log(RevealCards.inIncreasingOrder([17,13,11,2,3,5,7]));
console.log(RevealCards.inIncreasingOrder([997,451,661,333,221,613,101,83,795,631,950,580,816,732,147,574,917,794,487,46,244,590,118,846,698]))