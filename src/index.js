import _ from 'lodash';
import printMe from './print';

// styles
import './styles/index.css';

// images
import amogus from './assets/amogus.jpg';

function component() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    div.innerHTML = _.join(['Biba', 'Boba'], ' | ');
    img.src = amogus;
    btn.innerHTML = 'AMogus';
    btn.onclick = printMe;

    div.appendChild(img);
    div.appendChild(btn);
    
    return div;
}

document.body.appendChild(component());