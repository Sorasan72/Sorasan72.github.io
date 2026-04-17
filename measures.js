// перевод единиц измерения

const distanceForm = document.querySelector(".distance")
const milesToKilo = document.querySelector("#from")
const kiloToMiles = document.querySelector("#to")
const measureValue = document.querySelector(".measure__value")
const measuresContainer = document.querySelector(".total__measure")
const totalMeasure = document.createElement('p')
totalMeasure.setAttribute('class', 'measure')


export const distanceChanger = () => distanceForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!measureValue.value) {
        alert('Введите число!')
       
    }
    if (measureValue.value < 0) {
        alert('Введите действительное число!')
        measureValue.value = ''
        return
    }
    if (milesToKilo.checked) {
        const value = parseFloat(measureValue.value)
        const result = value * 1.60934
        totalMeasure.textContent = result

    }
    if (kiloToMiles.checked) {
        const value = parseFloat(measureValue.value)
        const result = value / 1.60934
        totalMeasure.textContent = `${result}`
    }
    measuresContainer.append(totalMeasure)
    measureValue.value = ''
})

const weightForm = document.querySelector(".weight")
const kiloToFt = document.querySelector("#from2")
const ftToKilo = document.querySelector("#to2")
const measureValue2 = document.querySelector(".measure__value2")
const measuresContainer2 = document.querySelector(".total__measure2")
const totalMeasure2 = document.createElement('p')
totalMeasure2.setAttribute('class', 'measure')

export const weightChanger = () => weightForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!measureValue2.value) {
        alert('Введите число!')
       
    }
    if (measureValue2.value < 0) {
        alert('Введите действительное число!')
        measureValue2.value = ''
        return
    }
    if (kiloToFt.checked) {
        const value = parseFloat(measureValue2.value)
        const result = value * 2.205
        totalMeasure2.textContent = result

    }
    if (ftToKilo.checked) {
        const value = parseFloat(measureValue2.value)
        const result = value * 0.454
        totalMeasure2.textContent = `${result}`
    }
    measuresContainer2.append(totalMeasure2)
    measureValue2.value = ''
})


distanceChanger()
weightChanger()