const todoList=[
  'make dinner',
  'do homework',
  'play football',
  'admire Ronaldo'
]
renderToDoList()


function renderToDoList(){


  let todoListHtml='';

  for (let i=0; i< todoList.length; i++){
    const todo= todoList[i]
    const html=`
      <p>
        ${todo} <button onclick ='
        todoList.splice(${i}, 1)
        renderToDoList()
        
        '>Delete</button>
      </p>

    `
    todoListHtml+=html

  }

  console.log(todoListHtml);

  document.querySelector('.js-todo-list').innerHTML=todoListHtml
}

function addTodo(){
 const inputElement= document.querySelector('.js-name-input')
 const name=inputElement.value
 todoList.push(name)
 console.log(todoList);
 inputElement.value=''

 renderToDoList()
}

