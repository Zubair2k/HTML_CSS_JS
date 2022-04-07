let addtodo=document.getElementById('addtodo');
let todoContainer=document.getElementById('todoContainer');
let inputText=document.getElementById('inputtext');
let clrall=document.getElementById('clrall');

addtodo.addEventListener('click',function(){
    var para=document.createElement('p');
    para.innerText=inputText.value;
    todoContainer.appendChild(para);
    inputText.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
        clr.addEventListener('click',function(){
            todoContainer.removeChild(para);
        })
    })
    
    para.addEventListener('dblclick',function(){
        todoContainer.removeChild(para);
    })

})

clrall.addEventListener('click',function(){
    todoContainer.innerHTML="";
})

save.addEventListener('click',function(){
    var savebtn=document.getElementById('todoContainer').innerHTML;
    localStorage.setItem('savebtn',savebtn);

})

savelst.addEventListener('click',function(){
    var savelst=localStorage.getItem('savebtn');
    document.getElementById('todoContainer').innerHTML= savelst;

})

