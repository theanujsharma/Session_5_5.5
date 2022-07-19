function alphaOrder(aString){
    let reverseCharList = aString.split('').sort()
    let aWord = ""
    for (let char of reverseCharList)
    {
    aWord = aWord + char
    }
    return aWord
}
let firstName = "shanon"
console.log(alphaOrder(firstName))

