// let target = document.querySelector<HTMLDivElement>('#target');
// target.classList.add('border');



// // target.style.width = '400px';
// target.style.alignContent = 'center';
// interface Student {
//     name: string,
//     firstName: string,
//     promo: number,
//     picture: string
// }

// let stagiére: Student[] = [{
//     name: "nisreen",
//     firstName: "Khattam",
//     promo: 2023,
//     picture: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
// },
// {
//     name: "yasmin",
//     firstName: "choboubi",
//     promo: 2023,
//     picture: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
// },
// {
//     name: "nesrin",
//     firstName: "shaiek",
//     promo: 2022,
//     picture: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
// },
// {
//     name: "sara",
//     firstName: "sami",
//     promo: 2022,
//     picture: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
// }];




// function displayList(student: Student[]) {
//     for (const item of student) {
//         const col = document.createElement('div');
//         col.classList.add('col-md-3' , 'col-sm-6 ');


//         const h3 = document.createElement('h3');
//         h3.style.alignItems = 'center';
//         h3.style.width = '400px';
//         h3.textContent = item.name + item.firstName;
//         h3.style.background = 'pink';
//         col.appendChild(h3);


//         const img = document.createElement('img');
//         img.src = item.picture;
//         // img.style.width = '400px';
//         // img.style.height = '400px';
//         img.classList.add('img-fluid rounded')
//         col.appendChild(img);



//         const p = document.createElement('p');
//         p.style.alignItems = 'center';
//         p.style.width = '400px';
//         p.textContent = item.promo.toString();

//         col.appendChild(p);
//         target.appendChild(col);

//     }
//     // div1.appendChild(div2);

// }

// target.addEventListener('click', () => {
//     displayList(stagiére);
// });





interface Student {
    name: string;
    firstName: string;
    promo: number;
    picture: string;
}
let selected: Student | null = null;

let stagiéres: Student[] = [
    { firstName: 'nisreen', name: 'Khattam', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png' },
    { firstName: 'sara', name: 'salim', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png' },
    { firstName: 'yasmin', name: 'salam', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png' },
    { firstName: 'louna', name: 'lamar', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png' },
];



const target = document.querySelector<HTMLElement>('#target');
target.classList.add('m-auto');

displayStudent(stagiéres);


function displayStudent(students: Student[]) {
    target.innerHTML = '';
    for (const item of students) {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3');

        const div = document.createElement('div');
        div.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const h3 = document.createElement('h3');
        h3.classList.add('card-title');

        const img = document.createElement('img');
        img.classList.add('card-img-top');

        const p = document.createElement('p');
        p.classList.add('card-text');


        h3.textContent = item.name + ' ' + item.firstName;
        img.src = item.picture;
        img.width = 200;
        p.textContent = 'Promo : ' + item.promo

        cardBody.appendChild(h3);
        cardBody.appendChild(p);


        col.appendChild(div);

        div.appendChild(img);
        div.appendChild(cardBody);

        target.appendChild(col);


        if (selected === item) {
            div.classList.add('bg-primary');
        }

        div.addEventListener('click', (event) => {
            if (selected === item) {
                selected = null;
            }
            else {
                selected = item;

            }
            displayStudent(stagiéres);

        })


    }
}

const bbtt = document.querySelector<HTMLButtonElement>('#change');
bbtt.addEventListener('click', () => {
    selected.firstName = ('Prénom Modifié');
    displayStudent(stagiéres);


})
