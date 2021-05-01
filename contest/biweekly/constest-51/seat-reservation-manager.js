/**
 * @param {number} n
 */
 var SeatManager = function(n) {
    this.seats = new Array(n+1).fill("u");
     this.seats[0] = null;
 };
 
 /**
  * @return {number}
  */
 SeatManager.prototype.reserve = function() {
     for(let i=1;i<this.seats.length;i++){
         if(this.seats[i]==="u") {
             this.seats[i]= "r";
             return i;
         }
     }
 };
 
 /** 
  * @param {number} seatNumber
  * @return {void}
  */
 SeatManager.prototype.unreserve = function(seatNumber) {
     this.seats[seatNumber]  = "u";
 };
 
 /** 
  * Your SeatManager object will be instantiated and called as such:
  * var obj = new SeatManager(n)
  * var param_1 = obj.reserve()
  * obj.unreserve(seatNumber)
  */