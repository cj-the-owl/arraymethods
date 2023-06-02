let list = []

function displayArray() {
    let elementInput = document.getElementById("input").value;
    list.push(elementInput)

    document.getElementById("display").innerHTML = list ;
}

let array = []

function displayObject() {
    let ob = {
        inputName: document.getElementById("name").value,
        inputSurname: document.getElementById("surname").value
    }
    
    array.push(ob)

    // document.getElementById("dis").innerHTML = ob.value;
    document.getElementById("dis").innerHTML += Object.values(ob)
}