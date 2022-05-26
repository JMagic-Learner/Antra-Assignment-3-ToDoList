


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => printHTML(json))
//   .then(json => moreInfo(json))
 

function moreInfo(input) {
// for (let i =0; i < input.length; i++) {
//   console.log("_____________________________");
//   console.log(input[i].userId); // These are the indivdual key value pairs
//   console.log(input[i].id);
//   console.log(input[i].title);
//   console.log(input[i].completed);
// }
}
// FIRST METHOD: Looping via FOR LOOP
// function printHTML(input) {
//   for (let i =0; i < input.length; i++) {
//   console.log("_____________________________");
//   console.log(input[i].userId); // These are the indivdual key value pairs
//   console.log(input[i].id);
//   console.log(input[i].title);
//   console.log(input[i].completed);
//   let todoItem = document.createElement('div')
//   let todoItemFlex = document.createElement('div')
//   todoItemFlex.classList.add('item-container-flex')
//   todoItem.classList.add('item-container')
//   mainContainer.appendChild(todoItem);
//   todoItem.appendChild(todoItemFlex);
//   let idNUM = document.createElement('p');
//   let idFULL = document.createElement('p');
//   let title = document.createElement('p');
//   let status = document.createElement('p');
//   idNUM.classList.add('container-child');
//   idFULL.classList.add('container-child');
//   title.classList.add('container-child');
//   status.classList.add('container-child');
//   let inputCHECK = document.createElement('input');
//   inputCHECK.classList.add('checkmark');
//   inputCHECK.type = "checkbox"

// idNUM.innerHTML = 'UserId: ' + input[i].userId;
// idFULL.innerHTML = 'Id: ' + input[i].userId;
// title.innerHTML = 'Title: ' + input[i].title;
// status.innerHTML = 'Completed: ' + input[i].completed;
// if (input[i].completed == 'true') {
//     inputCHECK.checked = "true";
// }
//   todoItemFlex.appendChild(idNUM);
//   todoItemFlex.appendChild(idFULL);
//   todoItemFlex.appendChild(title);
//   todoItemFlex.appendChild(status);
//   todoItem.appendChild(inputCHECK);
// }
// }

// METHOD 2. USING FOR EACh
function printHTML (input) {
    input.forEach(input => {
  let mainContainer = document.getElementById("output");
  let todoItem = document.createElement('div')
  let todoItemFlex = document.createElement('div')
  todoItemFlex.classList.add('item-container-flex')
  todoItem.classList.add('item-container')
  mainContainer.appendChild(todoItem);
  todoItem.appendChild(todoItemFlex);
  let idNUM = document.createElement('p');
  let idFULL = document.createElement('p');
  let title = document.createElement('p');
  let status = document.createElement('p');
  idNUM.classList.add('container-child');
  idFULL.classList.add('container-child');
  title.classList.add('container-child');
  status.classList.add('container-child');
  let inputCHECK = document.createElement('input');
  inputCHECK.classList.add('checkmark');
  inputCHECK.type = "checkbox"
  inputCHECK.checked = input.completed
idNUM.innerHTML = 'UserId: ' + input.userId;
idFULL.innerHTML = 'Id: ' + input.userId;
title.innerHTML = 'Title: ' + input.title;
status.innerHTML = 'Completed: ' + input.completed;

  todoItemFlex.appendChild(idNUM);
  todoItemFlex.appendChild(idFULL);
  todoItemFlex.appendChild(title);
  todoItemFlex.appendChild(status);
  todoItem.appendChild(inputCHECK);
     }     )
}





 