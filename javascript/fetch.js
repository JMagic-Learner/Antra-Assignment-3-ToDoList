
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => moreInfo(json))


function moreInfo(input) {
for (let i =0; i <= input.length; i++) {
  console.log(input[i].userId); // These are the indivdual key value pairs
  console.log(input[i].id);
  console.log(input[i].title);
  console.log(input[i].completed);
}
}

 