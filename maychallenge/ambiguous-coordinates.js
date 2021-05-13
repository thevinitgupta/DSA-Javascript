/**
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(S) {
    let ans = []
    const isValid = (str, dec) => {
        let n = str.length
        if (dec && str[n-1] === "0") return false
        if (n !== 1 && dec !== 1 && str[0] === "0") return false
        return true
    }
    for (let i = 2; i < S.length - 1; i++) {
        let xStr = S.slice(1,i), yStr = S.slice(i, S.length - 1),
            xPoss = []
        for (let j = 0; j < xStr.length; j++)
            if (isValid(xStr, j))
                xPoss.push(xStr.slice(0,j) + (j ? "." : "") + xStr.slice(j))
        for (let j = 0; j < yStr.length; j++)
            if (isValid(yStr, j)) {
                let y = yStr.slice(0,j) + (j ? "." : "") + yStr.slice(j)
                for (let x of xPoss)
                    ans.push(`(${x}, ${y})`)
            }
    }
    return ans
};