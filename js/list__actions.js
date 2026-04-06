const list = document.querySelector(".total__list")
// const listElem = document.querySelector(".total__list__elem")
// const deleteButton = document.querySelector(".delete")

export const list__actions = () => list.addEventListener('click', (event) => {
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


const clearButton = document.querySelector(".clear")
export const clearBtn = () => clearButton.addEventListener('click', () => {
    list.innerHTML = ''
})

list__actions();
clearBtn()