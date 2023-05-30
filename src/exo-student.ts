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

        //Si le student actuel de la boucle est le même que celui dans la variable selected, alors on lui rajoute une classe bootstrap pour le distinguer visuellement

        if (selected === item) {
            div.classList.add('bg-primary');
        }







        /**
         * Au click sur la card d'un student, on fait en sorte de mettre la valeur actuelle de la boucle en selected,
        * ou de mettre selected à null si on click sur le student qui est déjà sélectionné, et on relance la fonction d'affichage
        */
        div.addEventListener('click', (event) => {
            if (selected === item) {
                selected = null;
            }
            else {
                selected = item;

            }
            /**
            * Ici, on fait en sorte d'assigner les valeurs du student sélectionné aux champs de notre formulaire, si il y
            *  a effectivement un student sélectionné, sinon on vide les champs du formulaire avec un reset()
            */
            if (selected) {
                fisrtNameN.value = selected.firstName;
                nameN.value = selected.name;
                promoN.value = String(selected.promo);
                pictureN.value = selected.picture;
            } else {
                form.reset();
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



// Formulaire ajout Student

let fisrtNameN = document.querySelector<HTMLInputElement>('#lb1');
let nameN = document.querySelector<HTMLInputElement>('#lb2');
let promoN = document.querySelector<HTMLInputElement>('#lb3');
let pictureN = document.querySelector<HTMLInputElement>('#lb4');



// avec object de form on peut prend toutes les data comme ca
// const data = new FormData(form);
// let newStudent:Student = {
//     name: data.get('name')  as string,
//     firstName: data.get('firstname')  as string,
//     promo: Number(data.get('promo')),
//     picture: data.get('picture')  as string
// }

let form = document.querySelector<HTMLFormElement>('form');




form.addEventListener('submit', (event) => {
    event.preventDefault();



    if (fisrtNameN && nameN && promoN && pictureN) {
        // stagiéres.push({
        //     firstName: fisrtNameN.value,
        //     name: nameN.value,
        //     promo: Number(promoN.value),
        //     picture: pictureN.value

        // })

        // creer nouvel student as objet
        let newStudent: Student = {
            name: nameN.value,
            firstName: fisrtNameN.value,
            promo: Number(promoN.value),
            picture: pictureN.value
        }
        // stagiéres.push(newStudent);

        if (!selected) {
            stagiéres.push(newStudent);
        } else {
            Object.assign(selected, newStudent);
        }


    }
    displayStudent(stagiéres);
    console.log(stagiéres);

})

