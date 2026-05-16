const store = {
    apples : 15,
    bananas: 13,
    oranges: 14,
    applyDiscount : (num) => {
        for (let i in store){
           store[i]= store[i]-num
        } 
    }
}
console.log(store)
store.applyDiscount(5)
console.log(store)