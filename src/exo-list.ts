let btn = document.querySelector<HTMLButtonElement>('button.btn');
let ul = document.querySelector<HTMLElement>('ul.list');
let input = document.querySelector<HTMLInputElement>('input.in');

let table: string[] = ['nisreen', 'louna', 'yasmine', 'salim', 'jean', 'sabri',];
btn.style.backgroundColor = 'pink';

btn.addEventListener('click', () => {
    table.push(input.value);
    displayList(table);
    input.value = '';
})


function displayList(table: string[]) {
    ul.innerHTML = '';
    for (const item of table) {

        const li = document.createElement('li');
        // const p = document.createElement('p');

        li.textContent = item;
        li.style.background = 'pink';
        li.style.width = '100px';
        ul.appendChild(li)
    }
}
