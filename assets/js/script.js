

function buttonColorChange() {
    button.style.backgroundColor = '#E7717D';
    button.style.transition = 'background-color 1s';
};

let button = document.querySelector('view-more');
button.addEventListener('mouseover', buttonColorChange, false);