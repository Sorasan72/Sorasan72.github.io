// генерация списка расходов

const list = document.querySelector(".total__list")
// const listElem = document.querySelector(".total__list__elem")
// const deleteButton = document.querySelector(".delete")

// удаление элемента списка

export const list__actions = () => list.addEventListener('click', (event) => {
    if (event.target.classList.contains("delete")) {
       const li = event.target.closest('.total__list__elem');
        if (li) {
            li.remove()
        } 
    }
    
})

// добавление элемента списка

const onWhat = document.getElementById('on__what')
const howMuch = document.getElementById('how__much')
const newListItem = document.createElement('li');
const addItemForm = document.querySelector(".add__item")
addItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!onWhat.value || !howMuch.value) {
        alert('Заполните все поля!')
        return
    }
    if (!isNaN(onWhat.value)) {
        alert('Трата не должна быть числом!')
        return
    }
    if (howMuch.value < 0) {
        alert('Введите действительное число!')
        return
    }

    newListItem.className = 'total__list__elem'
    newListItem.innerHTML = `${onWhat.value} <div class="container"><input type="text" class="list__elem__input" value="${howMuch.value}"><button class="delete">🗑️</button></div>`
    
    const newInput = newListItem.querySelector('.list__elem__input')
    newInput.addEventListener('input', () => validateInput(newInput))
    list.appendChild(newListItem);
    
    onWhat.value = ''
    howMuch.value = ''
})

// кнопка очистки списка

const clearButton = document.querySelector(".clear")
export const clearBtn = () => clearButton.addEventListener('click', (event) => {
   event.preventDefault()
    list.innerHTML = ''

})

list__actions();
clearBtn()