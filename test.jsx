//Problem #1480  Running Sum 1D array

// Input: nums = [1,2,3,4]
// Output : [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


// nums = [1,6,8,5]

// var runningSum = function(nums) {
//     let total = 0
//     let results = []
    
//     for (let index = 0; index < nums.length; index++) {
//         total =  total + nums[index]
//         results.push(total)
//     }
//     console.log(results)
//     return(results)
// }

// runningSum(nums)

// nums = [1,2,3,4,5]


// expecting = [1,3,6,10,16]

// var runningSums = function(nums) {
//     let total = 0;
//     let results = []

//     for (let i = 0; i < nums.length; i++) {
//         total = total + nums[i]
//         results.push(total)
//         console.log("console logging for Cass", total)
//     }
//     console.log("FINISHED!")
//     console.log(results)
// }
//     runningSums(nums)


// var counter = function(maxCount) {
//     for(let number = 0; number < maxCount; number++){
//         counter = number+1;
//         if( counter%2 == 0){
//             console.log("so, much")
//         }
//         else{
//             console.log("I miss you")
//         }
//     }
//     console.log("to the moon and back")
// }

// counter(10)

// Problem # 1672 Richest Customer Wealth

accounts = [[1,2,3], [3,2,1], [4,5,1]]
var maximumWeatlth = function(accounts) {
    let richestWealth = 0;
    for(let i = 0; i < accounts.length; i++){
        let currentWealth = 0
        for(let j = 0; i < )
    }
};



1. Create richest varible to hold the highest value.Create
2. Loop through accounts array
    2a. Create varible to hold current wealth
    2b. Loop through inner array.
        I. Add the value of each index to the current wealth.
    c. compare current wealth vs highest stored wealth varible
        I. if current > richest varible, set richest varible to current varible.
3. Return richestWealth varible

