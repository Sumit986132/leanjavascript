/////for_in loop//////
const userName = ["amit","raju","hari","ritu","rina"]
for (const key in userName) {
    //console.log(userName[key])
}

///foreach()////
userName.forEach( (item,index) => {
   // console.log(`username ${item} and his/her index number ${index}`)
})

////while///
let index = 0
while (index < userName.length){
    //console.log(userName[index])
    index = index +1
}

///for_loop//
for (let index = 0; index < userName.length; index++) {
    const element = userName[index];
    
}

///for_of//
for (const item of userName) {
    console.log(item)
}