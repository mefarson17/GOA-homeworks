
function robotFactory (model,mobile) {
  return{
    model : model,
    mobile : mobile,
    beep() {
      console.log(`Beep Boop! მე ვარ Wall-E ${this.model}`)
    }
  }
}
const robot1 = robotFactory("Wall-E", true)
robot1.beep() 
const robot2 = robotFactory("R2D2", false)
robot2.beep()

const person = {
  firstName : "Giorgi",
  lastName : "Meparishvili",
  sayHello () {
    console.log(`hello i am ${this.firstName} ${this.lastName}`)//vaketebt moqmedebas ubralod gamogvaq saxeli vaketebt metods
  }
}
person.sayHello()

const rectangle = {
  width : 30 ,
  height : 50,
  get area() {
    return this.width * this.height // kitxva daisva ra aris fartobi viyenebt get
  }
}
console.log(rectangle.area)

const car = {
  brand :"toyota",
  speed : 120,
  drive(){
    console.log(`${this.brand} is going ${this.speed} km/h `)
  },
  get isFast(){
    if (this.speed >100){
      return true
    }else {
      return false
    }
  },
  set is_fast(newspeed){
    this.speed = newspeed
  }
}


car.drive()
console.log(car.isFast)
car.is_fast = 80
car.drive()
console.log(car.isFast)