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

  todoList.forEach(function(todoObject,index){
    const {name, dueDate}= todoObject
    const html=`
      <div
          <div>
            ${name}
          </div>
          <div>
            ${dueDate}
          </div>
          
          <button class='delete-button' onclick ='
          todoList.splice(${index}, 1)
          renderToDoList()
          
          '>Delete</button>
        
      </div>

    `
    todoListHtml+=html
    
  })



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
 inputElement.value=''
 renderToDoList()
}

