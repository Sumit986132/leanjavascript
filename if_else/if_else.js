const totalMark = (math,eng,odia,ssc,sci) => {
    const totalmark = math +eng + odia + ssc + sci
    return  totalmark
}
let  result = totalMark(76,98,77,87,77)
console.log(result)
if(350 >= result){
    console.log("avage mark")
} else if(400 >= result || 500 >= result){
    console.log("awsome mark")
}
else {
    console.log("better luck next time")
}
