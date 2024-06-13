//
// change the styling of an element
//
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

//
//change the styling of a list of elements
//
// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++)
//     {
//         listItems[i].style.fontSize = '5rem';
//     }

//
// Creating a new li element
//
const ul = document.querySelector('ul');
const li = document.createElement('li');

//
// add the new element to the ul
//
ul.append(li);

//
// modify the elements text
//
li.innerText = 'X-Men';

//
// modify the element attributes
//
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')
li.classList.add('list-group-item');
li.classList.add('list-group-item-success');
li.remove();
