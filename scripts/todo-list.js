const todoList=[{
  name:'make dinner',
  dueDate:'2025-03-29'
},{
  name:'do homework',
  dueDate:'2025-03-27'
},
];
renderToDoList()


function renderToDoList(){


  let todoListHtml='';

  for (let i=0; i< todoList.length; i++){
    const todoObject= todoList[i]
    //const name=todoObject.name;
    //const dueDate=todoObject.dueDate
    const {name, dueDate}= todoObject
    const html=`
      <p>
        ${name} ${dueDate}<button onclick ='
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
 const dateInputElement=document.querySelector('.js-due-date-input')
 const dueDate=dateInputElement.value
 const name=inputElement.value
 todoList.push({
    name:name,
    dueDate:dueDate
 })
 console.log(todoList);
 inputElement.value=''

 renderToDoList()
}

