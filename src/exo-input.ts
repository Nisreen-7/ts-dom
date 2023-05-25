let input = document.querySelector<HTMLInputElement>('input.in');
let button = document.querySelector<HTMLButtonElement>('button.btn');
let para = document.querySelector<HTMLParagraphElement>('p.paraInput');
let spa = document.querySelector<HTMLSpanElement>('span.ss');


button.addEventListener('click', () => {
    para.style.background = 'pink';
    para.textContent = (input.value);
})

input.addEventListener('input', () => {


    let count = input.value.length;

    spa.textContent = count.toString();
    if (count > 20) {
        input.value = input.value.substring(0, 19);
    }


})