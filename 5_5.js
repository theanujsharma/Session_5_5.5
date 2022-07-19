function reverseString(aString){
    let reverse = ""
    let char = aString.length
    let last_index = char - 1
    while (last_index >= 0)
    {
    reverse = reverse + aString[last_index]
    last_index = last_index - 1
    }
    return reverse
}
var fName = "Shanon"
console.log(reverseString(fName))





