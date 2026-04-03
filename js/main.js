const measureForm = document.querySelector(".measures__changer")
const milesToKilo = document.querySelector("#from")
const kiloToMiles = document.querySelector("#to")
const measureValue = document.querySelector(".measure__value")
const measuresContainer = document.querySelector(".total__measure")
const totalMeasure = document.createElement('p')
totalMeasure.setAttribute('class', 'measure')

measureForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (milesToKilo.checked) {
        const value = parseFloat(measureValue.value)
        const result = value * 1.60934
        totalMeasure.textContent = result

    }
    if (kiloToMiles.checked) {
        const value = parseFloat(measureValue.value)
        const result = value / 1.60934
        totalMeasure.textContent = `=${result}`
    }
    measuresContainer.append(totalMeasure)
    measureValue.value = ''
})







const changeCurrency = document.getElementById('change__currency');


function createOption(currencyArray){

    currencyArray.forEach( item => {
          const opt =  document.createElement('option');
          opt.textContent = item[1];
          opt.setAttribute('data-code', item[0]);
          changeCurrency.append(opt)
    });

}

//получение списка всех валют

fetch("https://v6.exchangerate-api.com/v6/934ed8bd54e45ea69b94dc35/codes")
    .then ((answer)=>{
        return answer.json();
    })
    .then(( data)=>{ console.log(data.supported_codes); createOption(data.supported_codes)})


const list = document.querySelector(".total__list")
// const listElem = document.querySelector(".total__list__elem")
// const deleteButton = document.querySelector(".delete")
list.addEventListener('click', (event) => {
    if (event.target.classList.contains("delete")) {
       const li = event.target.closest('.total__list__elem');
        if (li) {
            li.remove()
        } 
    }
    
})