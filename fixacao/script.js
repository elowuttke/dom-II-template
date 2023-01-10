let lista = document.getElementById("lista")

const insereItem = (event) => {
    event.preventDefault();
    const novaFruta = document.getElementById("meu-input").value;
    const newLi = document.createElement("li");
    newLi.innerHTML = novaFruta;
    lista.appendChild(newLi);
    document.getElementById("meu-input").value = ""
}