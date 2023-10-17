function totalMark(math,science,english,history,geogarphy){
    const fullmark = math + science +english +history +geogarphy;
    console.log("your full mark : " ,fullmark)
    const percentage = (fullmark/500)*100
    console.log("your percentage :",percentage.toPrecision(2))
   // if (percentage<35) {
    
   //     "your are pass and best of luck for ur future"
        
   // } else {
        "your are fall and retry next year"
   // }
    
  return percentage
}
const result = totalMark(45,65,76,55,65)
console.log("result :",result.toFixed(1))

