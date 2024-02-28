
let list = document.getElementById("todolist")
let orderedListElement = document.getElementById("todolist")
let input = document.getElementById("UserID-input")
let IDnumber = 0


// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

  let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}


// const populateTodos = () => {
//   for (let i = 0; i < arrayOfTodos.length; i++) {
//     text = arrayOfTodos[i].title;
//     console.log(text)
//     listItem = document.createElement("LI")
//     listItem.innerHTML = text;
//     list.appendChild(listItem);
//   }
// }


const populateTodos = () => {
  // Start with getting just the first item and its title property.

  // Then capture the ol item into a variable (getElementById)
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const title = arrayOfTodos[i].title;
    // createElement to make a new LI
    const listItem = document.createElement("li")
    // createTextNode inside the LI using the title property
    const textNode = document.createTextNode(title);
    // Append the text to the new element
    listItem.append(textNode);
    // Append the LI element to the OL element
    orderedListElement.append(listItem);
  }
}

const updateUserID = (element) => {
  IDnumber = element.value
  console.log("Inputed UserID is: ", IDnumber)
}

const filteredTodos = () => {
  console.log("hello")
  //function call to clear todos
  clearTodos()
  
  //get user input value by id
  // const userInputValue = document.getElementById('UserID-input').value;

  //user filter method, filter arrayOfTodos and return todos that pass condition
  const filtered = arrayOfTodos.filter((todo) => {
  return todo.userId == IDnumber
  })
  console.log(filtered)
  
  //redefine arrayOfTodos to be filtered todos
  arrayOfTodos = filtered
  
  //run populateTodos function
  populateTodos()
}

const clearTodos = () => {
  //get orderd List element by ID
  document.getElementById("todolist").innerHTML = ""
}



// Prevent the from from reseting on Enter, and instead trigger a click of the submit button
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("UserID-submit").click();
  }
}) 