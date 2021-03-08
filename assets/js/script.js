let button = document.querySelector('.view-more');

function buttonColorChange() {
    button.style.backgroundColor = '#E7717D';
    button.style.transition = 'background-color 1s';
};

function buttonColorChangeBack() {
    button.style.backgroundColor = 'transparent';
    button.style.transition = 'background-color 1s';
}


button.addEventListener('mouseover', buttonColorChange, false);
button.addEventListener('mouseout', buttonColorChangeBack, false);


let skills = document.getElementById('skills');
let skillTable = document.getElementsByClassName('skills-li');
let layer = document.querySelector('.layer');

function showTable() {
    for(let i=0; i<skillTable.length; i++) {
        skillTable[i].style.visibility = 'visible';
        skillTable[i].style.transition = 'visibility 1s';
        skillTable[i].style.border = 'solid 1px #fcafb7';
        skillTable[i].style.transition = 'border 1s';
        
    }
    layer.style.opacity = '40%';
    layer.style.transition = 'opacity 1s';
}



function hideTable() {
    for(let i=0; i<skillTable.length; i++) {
        skillTable[i].style.visibility = 'hidden';
        skillTable[i].style.border = '';
        
    }
    layer.style.opacity = '0%';
    layer.style.transition = 'opacity 1s';
}

skills.addEventListener('mouseover', showTable, false);
skills.addEventListener('mouseout', hideTable, false);