// перевод единиц измерения

const measureForm = document.querySelector(".measures__changer")
const milesToKilo = document.querySelector("#from")
const kiloToMiles = document.querySelector("#to")
const measureValue = document.querySelector(".measure__value")
const measuresContainer = document.querySelector(".total__measure")
const totalMeasure = document.createElement('p')
totalMeasure.setAttribute('class', 'measure')



export const measureChanger = () => measureForm.addEventListener('submit', (event) => {
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
        const result = Math.round(value * 1.60934) * 100
        totalMeasure.textContent = result

    }
    if (kiloToMiles.checked) {
        const value = parseFloat(measureValue.value)
        const result = Math.round(value / 1.60934) * 100
        totalMeasure.textContent = `${result}`
    }
    measuresContainer.append(totalMeasure)
    measureValue.value = ''
})

measureChanger()