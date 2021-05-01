var replaceDigits = function(s) {
  let charMap = "abcdefghijklmnopqrstuvwxyz"

  let i = 0,str="";
  for(let i =0;i<s.length;i++){
    if(Number.isNaN(parseInt(s[i]))){
        str += s[i];
    }
    else {
        str += String.fromCharCode(s.charCodeAt([i-1])+parseInt(s[i]))
    }
  } 
  return str; 
};

console.log(replaceDigits("a1b1c2"));
console.log(replaceDigits("a1b2c3d4e"));