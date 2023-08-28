
output = []
var fizzbuzz = function(count) {
    for(i = 1; i <= count; i++){
        if(i % 15 === 0){
            output.push("Fizzbuzz")
        } else if(i % 5 === 0){
            output.push("buzz")

        } else if( i % 3 == 0){
            output.push("Fizz")
        } else {
            output.push(i)
        }
    }
    console.log(output)
}

fizzbuzz(100);