var checkIfPangram = function(sentence) {
    let letterMap = {};
    for(let i=0;i<sentence.length;i++){
        if(letterMap[sentence[i]]) letterMap[sentence[i]]++;
        else letterMap[sentence[i]] = 1;
    }
    if(Object.keys(letterMap).length===26) return true;
    else return false;
};