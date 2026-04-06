const changeCurrency = document.getElementById('change__currency');

export function createOption(currencyArray){

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

