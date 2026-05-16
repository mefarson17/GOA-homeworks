// function robotFactory(model, mobile) {
//   return {
//     model: model,
//     mobile: mobile,
//     beep() {
//       console.log(`Beep Boop! მე ვარ ${this.model}`);
//     }
//   };
// }

const person = {
  firstName: "Giorgi",
  sayHello() {
    console.log(`გამარჯობა, მე ვარ ${this.firstName}`);
  }
};


const rectangle = {
  width: 10,
  height: 5,

  get area() {
    return this.width * this.height;
  }
};



function robotFactory(model,mobile){
  return{
    model: model,
    mobile: mobile,
    beep(){
      console.log(`Beep Boop! მე ვარ ${this.model}`)
    }
  }
}