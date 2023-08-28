// Problem # 1672 Richest Customer Wealth

accounts = [[111,2,3], [23,2,17], [74,75,51], [5,51,1]]

var maximumWeatlth = function(accounts) {
    let richestWealth = 0;
    for(let i = 0; i < accounts.length; i++){
        let currentWealth = 0;
        for(let j = 0; j < accounts[i].length; j++){
            currentWealth += accounts[i][j]
        }
    if (currentWealth > richestWealth){
        richestWealth = currentWealth
        console.log("change in wealth leader:", richestWealth)
    }
        console.log("this account has", currentWealth, "oooof!")
    }
        console.log("highest wealth is..", "🌟", richestWealth, "🌟")
        return richestWealth
}

maximumWeatlth(accounts)
 

//time complexity: 0(n*m)
//space complexity: 0(1)

//