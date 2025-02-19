const inputBox = document.querySelector("#input-box");
const listContainer=document.querySelector('#list-container');
const addButton= document.querySelector('#add-button');

function addTodo(){
    const textFromInput = inputBox.value.trim();
    if (textFromInput){
        const listItem = document.createElement ('li');
        listItem.textContent = textFromInput;
        listContainer.appendChild(listItem);
        

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
        
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener('click', event=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
});

addButton.addEventListener('click', addTodo);
inputBox.addEventListener('keydown', event=>{
    if(event.key==='Enter'){
        addTodo();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
    const savedData = localStorage.getItem('data');
    if(savedData){
        listContainer.innerHTML = localStorage.getItem('data');
    }
}

showData();