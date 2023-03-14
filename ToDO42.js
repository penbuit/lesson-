const form = document.querySelector('.form');
const addHigh = document.querySelector(".add_high");
const addLow = document.querySelector(".add_low");
const formTwo = document.querySelector('.formTwo');
const first = document.querySelector('#first');
const second = document.querySelector('#second');

console.log(addHigh);
console.log(addLow);

//Удаление задачи для high
first.addEventListener('click', deleteTaskHigh);
//удаление задачи для low
second.addEventListener('click', deleteTaskLow);

//добавление задания для high
form.addEventListener('submit', addTaskHigh)
///добавление задания для low
formTwo.addEventListener('submit', addTaskLow)

function addTaskHigh(event){
    event.preventDefault();
    
    //Достаем текст новой задачи из поля ввода 
    const highText = addHigh.value;
    if(highText===''){
        alert('не прописана новая задача')
    } else {
    
    const taskHTML =`<div class="radio_box"> 
                        <input name="checkbox" type="checkbox" id="task">
                        <label class="Todo" for="task" data-action="done">${highText}</label> 
                        <button class="delete" data-action="delete">✕</button>

                    </div>` 

    //добавляем на страницу
    first.insertAdjacentHTML('beforeend', taskHTML);
    addHigh.value='';
    addHigh.focus();
    }


}

function addTaskLow(event){
    event.preventDefault();
    const lowText = addLow.value;
    if(lowText===''){
        alert('не прописана новая задача')
    } else {

    const taskHTML2 =`<div class="radio_box"> 
                        <input name="checkbox" type="checkbox" id="task">
                        <label class="Todo" for="task" data-action="done" >${lowText}</label> 
                        <button class="delete" data-action="delete">✕</button>

                    </div>` 

    //добавляем на страницу
    second.insertAdjacentHTML('beforeend', taskHTML2);
    addLow.value='';
    addLow.focus();
    }
}

function deleteTaskHigh (event) {
    if(event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.radio_box');
        console.log(parentNode);
        parentNode.remove();
    }
}

function deleteTaskLow (event) {
    if(event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.radio_box');
        console.log(parentNode);
        parentNode.remove();
    }
}

// first.addEventListener('click', outTaskHigh);

// function outTaskHigh(event) {
//     if(event.target.dataset.action === 'done'){
//         const styleTask = event.target.closest('.radio_box');
//         styleTask.style.color = '#989898';
//     }

// }