/* 
    实习过程中为了监听接口数据变化
*/
let i = 0;
let myPromise = new Promise( ( resolve, reject) => {
    let a = setInterval( () => {
        i++
        console.log(i)
        if(i === 3) {
            resolve(i)
            clearInterval(a)
        }
    }, 2000)
})

myPromise.then( (value) => {
    console.log(value)
})

