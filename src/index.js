import _ from 'lodash';

// styles
import './styles/index.css';

// images
import amogus from './assets/amogus.jpg';

function component() {
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.innerHTML = _.join(['Biba', 'Boba'], ' | ');
    img.src = amogus;

    div.appendChild(img);
    
    return div;
}

document.body.appendChild(component());