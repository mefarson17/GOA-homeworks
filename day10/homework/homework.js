let balance = 1000 ;
let withdrawAmount = 475;
const isAccountActive = true ;
let age = [17,18,16,15,12,14,50,55,52,24,23]
let randomAge = Math.floor(Math.random()*age.length)+1
let randomNum = age[randomAge]

//type 2
switch (true) {
    case (!isAccountActive):
        console.log( "ტრანზაქცია უარყოფილია: ბარათი დაბლოკილია.");
        break
    case (withdrawAmount > balance) :
         console.log(`დარჩენილო თანხა ${balance-withdrawAmount}$`)
         console.log("არასაკმარისი ნაშთი.") 
         break
    case (withdrawAmount <=0) :
        console.log("გთხოვთ, მიუთითოთ ვალიდური თანხა.") 
        break
    case (withdrawAmount<=balance) :
        console.log(`დარჩენილო თანხა ${balance-withdrawAmount}$`)
        console.log("ტრანზაქცია სრულდება. თქვენი ბალანსი ნულდება!")
        break
    default :
    console.log("ტრანზაქცია წარმატებულია.")

}

function isAllowed(arr) {
    for (let  i = 0 ; i < arr.length ; i++){
        if (arr[i] >=18){
            console.log(`წვდომა დაშვებულია : ${arr[i]}`)
        }else {
            console.log(`წვდომა აკრძალულია : ${arr[i]}`)
        }
    }

    
}
function isAllo(mas) {
    if (mas>=18 ) {
        console.log(`წვდომა დაშვებულია : ${mas}`)
    }else {
        console.log(`წვდომა აკრძალულია : ${mas}`)
    }
}

// console.log(isAllowed(age))

console.log(isAllo(randomNum))



// type 1
// if(!isAccountActive) {
//     console.log( "ტრანზაქცია უარყოფილია: ბარათი დაბლოკილია.")
// }else if (withdrawAmount > balance) {
//     console.log(`დარჩენილო თანხა ${balance-withdrawAmount}$`)
//     console.log("არასაკმარისი ნაშთი.") 
// }else if (withdrawAmount <=0) {
//     console.log("გთხოვთ, მიუთითოთ ვალიდური თანხა.")  
// }else if (withdrawAmount<=balance) {
//     console.log(`დარჩენილო თანხა ${balance-withdrawAmount}$`)
//     console.log("ტრანზაქცია სრულდება. თქვენი ბალანსი ნულდება!")
// }else {
//     console.log( "ტრანზაქცია წარმატებულია.")
// }
