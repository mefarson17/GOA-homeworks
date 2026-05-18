document.getElementById("satauri").style.color = "red"
document.getElementById("satauri").style.backgroundColor = "orange"
document.getElementById("satauri").style.display = "flex"
document.getElementById("satauri").style.justifyContent= "center"
document.getElementById("satauri").style.fontFamily = "sans-serif"
document.getElementById("satauri").style.height ="100px" 
document.getElementById("satauri").style.alignItems = "center"


console.log("number 3")
function box(){
    this.x = 0;
    this.setX = (number) => {
        this.x = number
    }
    this.getX = () => {
        return this.x
    }
}

const newBox = new box()

newBox.setX(10)
console.log(newBox.getX())

console.log("number 4")

function profile() {
    this.name = "" ;
    this.setName =  (newName) =>{
        this.name = newName
    }
    this.getName = () => {
        return  `hello ${this.name}`
    }
}


const newProfile = new profile()

newProfile.setName("Giorgi")
console.log(newProfile.getName())

newProfile.setName("Anano")
console.log(newProfile.getName())


//number 0

function Car(brand,speed){
    this.brand = brand ;
    this.maxSpeed = speed;
    this.getInfo = () => {
        return`car details : brand name - ${this.brand} max speed is - ${this.maxSpeed} km/h` 
    } 
}

const alfaRomeo = new Car("alfaRomeo",500)

console.log(alfaRomeo.getInfo())

//number 1

let students = ["Gio","tiko","tako","barbi","luka"]

students.forEach((student,index) =>{
    console.log((index + 1) + "-" + student)
})

//number 2

const bank = {
    balance : 0 , 
    deposit (money) {
        this.balance += money
    },
    getBalance (){
        return `your bank balance is ${this.balance} $`
    }
}
bank.deposit(100000)
console.log(bank.getBalance())

//number 3

function makePerson (name,age){
    return{
        name:name,
        age : age ,
        introduce () {
            console.log(`hello my name is ${this.name} and i am ${this.age} years old`)
        }
    }
}

const Giorgi = makePerson("giorgi",19)
console.log(Giorgi)
Giorgi.introduce()

//number 4 

function Phone (model,storage,price) {
    this.model = model;
    this.storage =storage;
    this.price = price;
    this.getInfo = () =>{
        console.log(`this model called ${this.model} it has ${this.storage} GB storage and price is - ${this.price} $`)
    }
}

const iphone = new Phone("17 pro",256,700)

console.log(iphone)
iphone.getInfo()

//number 5

function BankAccount (owner){
    this.owner = owner ;
    this.balance = 0 ;
    this.setBalance = (money) =>{
        this.balance += money
    };
    this.getBalance = ()=> {
        return `balance is ${this.balance} $`
    };
    this.getOwner = () => {
        return `acc owner is ${this.owner}`
    }
}


const newAcc = new BankAccount("Giorgi Meparishvili")
console.log(newAcc)
newAcc.setBalance(2500)
console.log(newAcc.getOwner())
console.log(newAcc.getBalance())

//number 6

function Student(name,age){
    this.name = name ;
    this.age = age ;
    this.grade = 0 ; 
    this.setGrade = (newGrade) => {
        if (newGrade>=0 && newGrade<=100){
            return this.grade = newGrade
        }else {
            return this.grade = "wrong grade"
        }
    };
    this.getGrade = () => {
        return `current grade : ${this.grade} Points`
    }
    this.getInfo = () => {
        return `students name : ${this.name}; students  age : ${this.age} ;students grade : ${this.grade} points`
    }
}

const student1 = new Student("Giorgi Meparishvili",19)

student1.setGrade(100)
console.log(student1.getInfo())
console.log(student1.getGrade())

student1.setGrade(150)
console.log(student1.getGrade())