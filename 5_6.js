function makeCapital(aList){
    let capitalList = []
    for (let element of aList)
    {
    let len = element.length
    let aString = element[0].toUpperCase() + element.slice(1,len)
    capitalList.push(aString)
    }
    return capitalList
}
let fruits = ['banana', 'apple', 'mango']
console.log(makeCapital(fruits))
