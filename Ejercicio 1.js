var edad = prompt("Ingresa tu edad")

if (edad <= 80) {
    if (edad > 18) {
        console.log("Puedes conducir")
    } else {
        console.log("No puedes conducir")
    }
} else {
    alert("introduce un edad válida")
}