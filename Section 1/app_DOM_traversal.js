// DOM Manipulation

//Traverse the BOM

//
//Parent node traversal
//
//let ul = document.querySelector('ul');

//console.log(ul.parentNode);
//console.log(ul.parentElement);

//continue up the tree (grandparent node)
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

//
//Child node traversal
//
let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//
//Sibling node traversal
//
const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
