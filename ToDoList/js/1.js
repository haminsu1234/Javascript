
window.onload=function(){
const todoList =document.getElementById('todoList');
const inputTodo = document.getElementById('inputTodo');
const btnAdd= document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel');

btnAdd.addEventListener('click',function(e){

        let todoVlaue = inputTodo.value;
        if(todoVlaue== ''){
            alert('할일을 입력하세요');
            return;
        }
    
        const listItem=document.createElement('li');
        listItem.className='d-flex list-group-item';
        listItem.innerText=inputTodo.value;

        const listBtn = document.createElement('button');
        listBtn.className='btn-close ms-auto';
        listBtn.onclick=function(e){
            let pNode = e.target.parentNode;
            todoList.removeChild(pNode);
        }

        listItem.appendChild(listBtn);
        todoList.appendChild(listItem);

        inputTodo.value='';

});
};