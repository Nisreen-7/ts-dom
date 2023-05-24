// let counter = 0;
// let button1 = document.querySelector('button#plus');
// button1.addEventListener('click', () => {
//     counter++;
//     console.log(counter);
//     let spanResult = document.querySelector<HTMLElement>('span#ss');
//     spanResult.textContent = String(counter);
//     // document.write(`<span> ${counter} </span>`);
// })



// let button2 = document.querySelector('button#moins');
// button2.addEventListener('click', () => {
//     counter--;
//     let spanResult = document.querySelector<HTMLElement>('span#ss');
//     spanResult.textContent = String(counter);
//     console.log(counter);
// })


// avec boolean

// let counter = 0;
// let button1 = document.querySelector('button#plus');
// button1.addEventListener('click', () => changeCounter(true));

// // avec function

// let button2 = document.querySelector('button#moins');
// button2.addEventListener('click', () => changeCounter(false));

// function changeCounter(aa: boolean) {
//     if (aa) {
//         counter++;
//     }
//     else {
//         counter--;
//     }

//     let spanResult = document.querySelector<HTMLElement>('span#ss');
//     spanResult.textContent = String(counter);
//     console.log(counter);


// }


// avec number
// let counter = 0;
// let button1 = document.querySelector('button#plus');
// button1.addEventListener('click', () => changeCounter(1));

// // avec function

// let button2 = document.querySelector('button#moins');
// button2.addEventListener('click', () => changeCounter(-1));

// function changeCounter(value: number) {

//     counter += value;


//     let spanResult = document.querySelector<HTMLElement>('span#ss');
//     spanResult.textContent = String(counter);
//     console.log(counter);


// }


//  avec this
let counter = 0;
let button1 = document.querySelector('button#plus');
button1.addEventListener('click', changeCounter);


let button2 = document.querySelector('button#moins');
button2.addEventListener('click', changeCounter);

function changeCounter() {
    if (this === button1) {
        counter++;
    }
    else {
        counter--;
    }

    let spanResult = document.querySelector<HTMLElement>('span#ss');
    spanResult.textContent = String(counter);
    console.log(counter);


}