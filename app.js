// DOM Manipulation

//Event listeners


//click
const buttonTwo = document.querySelector('.btn-2');

function alertBtn()
{
    alert('I love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

// Mouseover
const newBackgroundColor = document.querySelector('.card-3');
console.log(newBackgroundColor);

function changeBgColor() 
{
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);