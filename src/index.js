const _ = require('lodash');

function component() {
    const div = document.createElement('div');

    div.innerHTML = _.join(['Biba', 'Boba'], ' | ');
    
    return div;
}

document.body.appendChild(component());