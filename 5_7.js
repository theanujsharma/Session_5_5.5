function longestWord(aList){
    let wordLength = 0 
    for (var element of aList){
    if (element.length > wordLength)
    {
        var answer = element
        wordLength = element.length
    }
    }
    return answer
}
let fruits = ['avacado', 'apple', 'mango']
console.log(longestWord(fruits))