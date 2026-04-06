const totalBudget = document.querySelector(".total__btn")

export const countBudget = () => {
    totalBudget.addEventListener('click', () => {
    const totalContainer = document.querySelector('.total__wrapper__second');
    const listItems = document.querySelectorAll('.total__list__elem');
    
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
}

countBudget()