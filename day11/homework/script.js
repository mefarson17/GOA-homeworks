const changeTemp = celcius => (celcius * 1.8) +32 ;
console.log(changeTemp(20))
const monthlyPayment = (amount , year) => (amount / year)+ 5;
console.log(monthlyPayment(100,2))
const passwordCheking = pass => pass.length > 8 ? 'true': 'false' ;
console.log(passwordCheking('paroli123'))