// let pp = document.getElementById('playground');
// let carre1 = document.getElementById('square');
// let carre2 = document.getElementById('square2');

// pp.addEventListener('click', (event) => {
//     console.log(event.target);

//     carre1.style.left = event.offsetX + 'px';
//     carre1.style.top = event.offsetY + 'px';
//     carre1.style.width = '300px';

//     carre2.style.left = (event.offsetX + 40) + 'px';
//     carre2.style.top = (event.offsetY + 40) + 'px';

//     console.log(event.target);
// });



// avec mouse
let pp = document.getElementById('playground');
let carre1 = document.getElementById('square');
let carre2 = document.getElementById('square2');

pp.addEventListener('mousemove', (event) => {

    carre1.style.left = (event.clientX - carre1.offsetWidth / 2) + 'px';
    carre1.style.top = (event.clientY - carre1.offsetHeight / 2) + 'px';
    // carre1.style.width = '300px';

    // carre2.style.left = (event.offsetX + 40) + 'px';
    // carre2.style.top = (event.offsetY + 40) + 'px';

    console.log(event.target);
});


