function chooseFood(n) {
    
    let arr = [2, 3]
    for(let i = 2;i < n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    console.log(arr)
    return arr[n-1]
}

console.log(chooseFood(1))