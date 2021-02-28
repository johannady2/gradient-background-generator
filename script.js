var css = document.querySelector('h3');
//ar color1 = document.getElementsByClassName('color1');//returns an array
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var randomizeBtn = document.querySelector('.randomize');
var body = document.querySelector('body');

changeBackgroundColor();
showCurrentCSS();


console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListener('input',changeBackgroundColor);
color2.addEventListener('input',changeBackgroundColor);
randomizeBtn.addEventListener('click', generateRandomColor);

function changeBackgroundColor()
{
    body.style = 'background: linear-gradient(to right,'+color1.value + ',' + color2.value + ')';//(alternative)
    //body.style.background = 'linear-gradient(to right,'+color1.value + ',' + color2.value + ')';

    showCurrentCSS();
}

function showCurrentCSS()
{   
    
        css.textContent = body.style.background+ ';';//(alternative)
        
}


function generateRandomColor()
{
    var randomColor1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');//Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');//Math.floor(Math.random()*16777215).toString(16);

    assignRandomColor1(randomColor1,randomColor2);
}

function assignRandomColor1(rColor1,rColor2)
{
    body.style.background = 'linear-gradient(to right,'+rColor1 + ',' + rColor2 + ')';
    showCurrentCSS();
    color1.value = rColor1;
    color2.value = rColor2;
    console.log(rColor1 + ' & ' + rColor2)
}
