const changeFrom = document.getElementById('change__from');
const changeTo = document.getElementById('change__to');
let optTo

// создание пунктов option у элемента select

export function createOption(currencyArray){

    currencyArray.forEach( item => {
          const optFrom =  document.createElement('option');
          optTo =  document.createElement('option');
          optFrom.textContent = item[1];
          optTo.textContent = item[1];
          optFrom.setAttribute('value', item[0]);
          optTo.setAttribute('value', item[0]);
          optFrom.setAttribute('class', 'from');
          optTo.setAttribute('class', 'to');
          changeFrom.append(optFrom);
          changeTo.append(optTo);
    });

}

// получение списка всех валют

fetch("https://v6.exchangerate-api.com/v6/934ed8bd54e45ea69b94dc35/codes")
    .then ((answer)=>{
        return answer.json();
    })
    .then(( data)=>{ console.log(data.supported_codes); createOption(data.supported_codes)})


// конвертация валют

const currencyInput = document.querySelector(".currency__value")
const changeToDiv = document.querySelector(".change__to")
const totalCurrency = document.createElement('p')
totalCurrency.setAttribute('class', 'total__currency')
const convertForm = document.querySelector(".currency__changer")
const convert = () => {
    convertForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if (currencyInput.value < 0) {
        alert('Введите действительное число!')
        currencyInput.value = ''
        return
    }

    const codeTo = changeTo.value
    const codeFrom = changeFrom.value
    console.log(codeFrom, codeTo);
     
    fetch(`https://v6.exchangerate-api.com/v6/934ed8bd54e45ea69b94dc35/pair/${codeFrom}/${codeTo}`)
        .then ((answer)=>{
            return answer.json();
        })
        .then(( data)=>{
            
            totalCurrency.textContent = '';

            totalCurrency.textContent = `=${(Math.round(+currencyInput.value * (data.conversion_rate)))} ${codeTo}`
            changeToDiv.append(totalCurrency)
            // console.log((Math.round(+currencyInput.value * (data.conversion_rate))))
        })

   
    })
}

convert()

