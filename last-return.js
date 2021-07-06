function check(n){
    try {
        if(n.length>0)
        throw Error("wrong length")
    }
    finally {
            return "three" 
    }
}


console.log(check("vinit"));
console.log(check(5));