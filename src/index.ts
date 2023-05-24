let p2 = document.querySelector<HTMLElement>('#para2');
p2.style.color = 'blue';
p2.innerHTML = "modified by JS";

let s2 = document.querySelector<HTMLElement>('#section2');
s2.style.borderStyle = 'dotted';

s2.style.borderColor = '#000';

let sp2 = document.querySelector<HTMLElement>('#section2 .colorful');
sp2.style.background = 'orange';

let colorFulInPara = document.querySelector<HTMLElement>('p .colorful');
colorFulInPara.style.display = 'none';

let hh2 = document.querySelector<HTMLElement>(' #section2 h2');
hh2.style.fontStyle = 'italic';


let lien = document.querySelector<HTMLAnchorElement>('a');
lien.href = 'http://www.m2iformation.fr';

let cla = document.querySelector<HTMLElement>('#section2 h2');
cla.classList.add('big-text');

// Bonus
let paras = document.querySelectorAll('p');
for (const item of paras) {
    item.style.fontStyle = 'italic';

}








