
function reduce(num){
let counter = 0;
    while (num > 0){
        if(num % 2 == 0){
            num = num / 2
        } else {
            num = num - 1
        }
        counter++
    }
    console.log("total counter", counter)
    return counter
}

reduce(1)

// 18 -> 9 -> 8 -> 4 -> 2 -> 1 -> 0
// 4 -> 2 -> 1 -> 0