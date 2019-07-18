import cow from './cow';

// import './css/main.css';
import './sass/main.scss';

import image from './img/01.jpg';

const message = 'is great';

document.querySelector('#icon').innerHTML = `<img src="${image}" />`;

document.querySelector('#box').innerText = cow.say(`Webpack with Babel ${message}!`);