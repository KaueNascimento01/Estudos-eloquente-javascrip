function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++ ){
        if(string[i] === char){
            count++;
        }
    }
    return count;
}

function countBs(string){
    return countChar(string, "B");
}

console.log(countBs("BBC")); // 2
