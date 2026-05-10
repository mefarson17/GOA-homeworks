// homework N 1

const fruits = ['ვაშლი', 'მსხალი', 'ატამი'] ;

fruits.forEach((fruit,index) => {
    console.log(`${index} ${fruit}`);
});


// homework N 2

const nums = [1, 2, 3, 4, 5, 6];

nums.forEach((num) => {
    if (num % 2 === 0 ){
        console.log("ლუწია")
    }else {
        console.log("კენტია")
    }
})


// homework N 3

const prices = [100, 250, 50, 80] ;

let newPrices =  prices.map((price) => {
    return price * 0.9
})

console.log(newPrices)


// homework N 4

const arr = ['სახლი', 'გზა', 'ავტომობილი', 'ხე'];

let longWord = arr.some((ar)=> {
    return   ar.length > 10
})
console.log(longWord)


// homework N 5

const numss = [5, 12, 8, 130, 44] ; 

let finding = numss.find((num) => {
   return num > 10
})

console.log(finding)


// homework N 6

const fruta = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'];

let index = fruta.findIndex(item => item === "ფორთოხალი");

console.log(index);


// homework N 7

const radnom = ['მე', 'მიყვარს', 'JavaScript'] ;

let love = radnom.reduce((acc,string)=>{
    return acc + " " + string
},'')

console.log(love)


//classwork N 4

const ages =  [12, 25, 17, 30, 15] ; 

let adults = ages.filter((age)=>{
   return age >= 18
})

console.log(adults)


//classwork N 5

const randomNum =  [5, 8, -2, 10] ;

let naklebi = randomNum.some((number)=>{
   return  number < 0
})

console.log(naklebi)