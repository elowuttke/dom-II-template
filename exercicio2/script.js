//criar uma função pra mudar o type do input
const passwordInput = document.getElementById("password")
const formulario = document.getElementById("formulario")

const escondeSenha = (event) => {
    event.preventDefault()
    passwordInput.setAttribute("type","password")
}

formulario.classList.remove("light")
formulario.classList.add("dark")