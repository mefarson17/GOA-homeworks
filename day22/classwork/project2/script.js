const name = document.getElementById("name")
const Lastname = document.getElementById("Lastname")
const email = document.getElementById("email")
const password = document.getElementById("pass")
const submit = document.querySelector("button")

const user = {

}
submit.addEventListener("click" , ()=>{
    user.name = name.value;
    user.Lastname = Lastname.value;
    user.email = email.value;
    user.password = password.value
    console.log(user)
})
