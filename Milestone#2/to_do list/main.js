let AddToDoButton=document.getElementById('AddToDo');
let ToDoContainer=document.getElementById('ToDoContainer');
let InputFiend = document.getElementById('InputField');

AddToDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p')
    paragraph.classList.add('paragraph.styling');
    paragraph.innerText=InputField.value;
    ToDoContainer.appendChild(paragraph);
    InputFiend.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraph);
    })
    
})
