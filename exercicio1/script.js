const lista = document.getElementById("lista")

const newItem = document.createElement("li")
newItem.innerHTML = "Item 0"
lista.insertAdjacentElement("afterbegin", newItem)

const lastItem = document.createElement("li")
const text = document.createTextNode("Item 5")
lastItem.appendChild(text)
lista.appendChild(lastItem)