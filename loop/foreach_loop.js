const myArr = [1,2,3,4,5]
myArr.forEach(function (item) {
    console.log(item)
    const addNum = item * 100;
    console.log(addNum);
    return addNum
})