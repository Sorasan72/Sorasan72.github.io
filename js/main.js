const measureForm = document.querySelector(".measures__changer")
const milesToKilo = document.querySelector("#from")
const kiloToMiles = document.querySelector("#to")
const measureValue = document.querySelector(".measure__value")
const measuresContainer = document.querySelector(".total__measure")
const totalMeasure = document.createElement('p')
totalMeasure.setAttribute('class', 'measure')

measureForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if ((!measureValue.value) || isNaN(parseFloat(measureValue.value))) {
        // measureValue.classList.add("invalid")
        alert('Введите число!')
       
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
const listElem = document.querySelector(".total__list__elem")
// const deleteButton = document.querySelector(".delete")
list.addEventListener('click', (event) => {
    if (event.target.classList.contains("delete")) {
       const li = event.target.closest('.total__list__elem');
        if (li) {
            li.remove()
        } 
    }
    
})


const listItemInput = document.querySelector(".list__elem__input")

const onWhat = document.getElementById('on__what')
const howMuch = document.getElementById('how__much')

const addItemForm = document.querySelector(".add__item")
addItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!onWhat.value || !howMuch.value) {
        alert('Заполните все поля!');
        return;
    }

    const amount = parseFloat(howMuch.value);
    if (isNaN(amount)) {
        alert('Сумма должна быть числом!');
        return;
    }
    
    const newListItem = document.createElement('li');
    newListItem.className = 'total__list__elem';
    newListItem.innerHTML = `${onWhat.value} <div class="container"><input type="text" class="list__elem__input" value="${amount}"><button class="delete">🗑️</button></div>`;
    
    list.appendChild(newListItem);
    
    onWhat.value = '';
    howMuch.value = '';
})

const totalBudget = document.querySelector(".total__btn")
totalBudget.addEventListener('click', () => {
    const totalContainer = document.querySelector('.total__wrapper__second');
    const listItems = document.querySelectorAll('.total__list__elem');
    
    // Собираем расходы
    const expenses = [];
    listItems.forEach(item => {
        let title = '';
        for (let node of item.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                title = node.textContent.trim();
                break;
            }
        }
        
        const input = item.querySelector('.list__elem__input');

        if (input && input.value) {
            const amount = parseFloat(input.value);
            if (!isNaN(amount) && amount > 0 && title) {
                expenses.push({ title, amount });
            }
        }
    });
    
    totalContainer.innerHTML = '';

    if (expenses.length === 0) {
        totalContainer.innerHTML += '<p>Нет данных для отображения</p>';
        return;
    }
    
    // Создаём таблицу
    const table = document.createElement('table');
    table.setAttribute('class', 'total__table')
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    
    th1.textContent = 'Расходы';
    th2.textContent = 'Сумма';
    th2.setAttribute('class', 'th2')
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    let total = 0;
    
    expenses.forEach(expense => {
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        
        td1.textContent = expense.title;
        td2.textContent = expense.amount;
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
        
        total += expense.amount;
    });
    
    table.appendChild(tbody);
    
    const tfoot = document.createElement('tfoot');
    const totalRow = document.createElement('tr');
    const tdTotal1 = document.createElement('td');
    const tdTotal2 = document.createElement('td');
    
    tdTotal1.textContent = 'ИТОГО:';
    tdTotal2.textContent = total;
    totalRow.appendChild(tdTotal1);
    totalRow.appendChild(tdTotal2);
    tfoot.appendChild(totalRow);
    table.appendChild(tfoot);
    
    totalContainer.appendChild(table);
});


const clearButton = document.querySelector(".clear")
clearButton.addEventListener('click', () => {
    list.innerHTML = ''
})












