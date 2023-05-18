// You are trying to buy gifts for your two siblings for the next holiday season. To ensure you stay within budget, you are calculating sales tax and total cost before arriving at the cashier. Given a budget and the prices of the two gifts, write at least two functions that return a boolean if you are within or over budget.
// For this exercise, assume that the sales tax rate is 8 percent.
// Prior to writing any code, make sure we understand the problem entirely, pseudocoding along the way.

// First, define the given variables (budget, price1, and price2). 

const budget= 50;
const price1= 20;
const price2= 25;

// Define a function that returns the sum of the two prices before tax.

function sumOfGifts (gift1, gift2){
    return gift1 + gift2;
}

// Invoke the sumOfGifts function with the price1 and price2 variables. Store the return of this function in a new variable labeled giftTotal.

const giftTotal= sumOfGifts(price1, price2)

// Define a function that returns the cost of the giftTotal with tax (8 percent).

function addTax (giftTotal){
    return giftTotal + (giftTotal * 0.08);
}

// Invoke the addTax function by passing in the giftTotal variable. Store the return of this function in a new variable labeled giftsWithTax.

const giftsWithTax= addTax(giftTotal)

// Define a function that compares giftsWithTax and the budget variable. The function should return true if the budget is greater than or equal to giftsWithTax.

function holidayShopping (budget, giftsWithTax){
    return budget >= giftsWithTax;
}
// Invoke the holidayShopping function by passing in the budget and giftsWithTax variables. 

console.log(holidayShopping(budget, giftsWithTax));