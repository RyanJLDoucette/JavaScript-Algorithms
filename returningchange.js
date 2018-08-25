/*Problem: Write a JavaScript function that takes an amount in cents, and tells us which coins, 
and how many of them we need to make up that amount.
The coins available are 100,25, 10, 5 or 1 cents.*/

console.log(makeChange(3.12));




/*takes in an amount of money (eg: 1.56 represents 1 dollar and 56 cents) and returns an array of what coins would be returned
iteratively checks for largest coin that can be used, adds that coin to the coin list, than subtracts that coin from the money
Sample output: makechange(1.16) returns -> [1,10,5,1]*/
function makeChange (money) {
    var coinsList = [];//list of all the coins needed

    do {
        console.log(money);
        if(money >= 1) {//if the a one dollar coin fit into the money left
            coinsList.push('$1.00');//put 1 dollar coin on the list
            money -= 1;//subtract 1 dollar off of the list of money left
        }
        else if(money >= 0.25) {
            coinsList.push('25c');
            money -= 0.25;
        }
        else if(money >= 0.10) {
            coinsList.push('10c');
            money -= 0.10;
        }
        else if(money >= 0.05) {
            coinsList.push('5c');
            money -= 0.05;
        }
        else {
            coinsList.push('1c');
            money -= 0.01
        }
    }
    while(money > 0)

    return coinsList;
}

