/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeet = 3.281
const litreGallon = 0.264
const kiloPound = 2.204


const numConvert = document.getElementById("num-convert")
const btnConvert = document.getElementById("btn-convert")
let data = {
    length: document.getElementById("length"),
    volume: document.getElementById("volume"),
    mass: document.getElementById("mass")
}

btnConvert.addEventListener("click", function() {
    data.length.textContent = ""
    data.volume.textContent = ""
    data.mass.textContent = ""

    calculate(numConvert.value)
})

function calculate(number) {
    let lengthConvertToFeet = number * meterFeet
    lengthConvertToFeet = lengthConvertToFeet.toFixed(3)

    let lengthConvertToMeters = number / meterFeet
    lengthConvertToMeters = lengthConvertToMeters.toFixed(3)
    data.length.textContent = `${number} meters = ${lengthConvertToFeet} feet | ${number} feet = ${lengthConvertToMeters} meters`

    let volumeConvertToGallons = number * litreGallon
    volumeConvertToGallons = volumeConvertToGallons.toFixed(3)

    let volumeConvertToLitres = number / litreGallon
    volumeConvertToLitres = volumeConvertToLitres.toFixed(3)
    data.volume.textContent = `${number} liters = ${volumeConvertToGallons} gallons | ${number} liters = ${volumeConvertToLitres} gallons`

    let massConvertToPounds = number * kiloPound
    massConvertToPounds = massConvertToPounds.toFixed(3)

    let massConvertToKilos = number / kiloPound
    massConvertToKilos = massConvertToKilos.toFixed(3)
    data.mass.textContent = `${number} kilos = ${massConvertToPounds} pounds | ${number} kilos = ${massConvertToKilos} pounds`
}
