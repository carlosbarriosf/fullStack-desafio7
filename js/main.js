document.addEventListener("DOMContentLoaded", function() {
    console.log("Contenido del DOM cargado");
})

//3

window.onload = function() {
    const content = document.getElementsByTagName("strong");
    const textArea = document.getElementById("origen");
    textArea.value = content[0].innerText;
//4
    textArea.addEventListener("input", function() {
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        button[0].disabled = false;
    })
    const inputs = document.getElementsByTagName("input");
    const button = document.getElementsByTagName("button");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", handleInputs);
    }
    const listItems = document.getElementsByTagName("li");
    ok(listItems);
}

//5 y 6

function handleInputs(eventObj) {
    const button = eventObj.target;
    const destino = document.getElementById("destino");
    const textArea = document.getElementById("origen");
    let value = button.value;
    switch (value) {
        case "Reemplazar":
            destino.innerHTML = textArea.value;
            break;

        case "Agregar":
            destino.innerHTML = destino.innerHTML + textArea.value;
            break;

        case "Agregar 5 veces":
                for(let i = 0; i < 5; i++) {
                    destino.innerHTML = destino.innerHTML + textArea.value;
                }
            break;

        case "Agregar 10 veces":
                for(let i = 0; i < 10; i++) {
                destino.innerHTML = destino.innerHTML + textArea.value;
                }
            break;

        case "Agregar n veces":
                let askForValue = prompt("Indique el nro de veces que desea agregar el contenido");
                for(let i = 0; i < askForValue; i++) {
                    destino.innerHTML = destino.innerHTML + textArea.value;
                    }
            break;

        case "Vaciar":
                while(destino.firstChild) {
                    destino.removeChild(destino.firstChild);
                }
            break;
        case "Convertir a mayúsculas":
            destino.innerHTML = destino.innerHTML.toUpperCase();
            break;
    }
    const lowerCase = document.getElementsByTagName("button");
    lowerCase[0].addEventListener("click", function() {
        destino.innerHTML = destino.innerHTML.toLowerCase();
    })
}

//7

function ok(listItems) {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = "[Ok]" + listItems[i].innerHTML;
    }
}
