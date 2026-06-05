const form = document.querySelector("#log")
const users = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = form.name.value
    const Lastname = form.Lastname.value
    const email = form.email.value
    const password = form.password.value
    const user = {
        name: name,
        Lastname: Lastname,
        email: email,
        password: password
    }

    users.push(user)
    console.log(users) 

    form.reset()
    window.open("index.html")
})