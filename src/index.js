const createEl = document.querySelector('input[type="submit"]')
const inputValue = document.querySelector('input[type="text"]')
const ulEl = document.querySelector('#tasks')

class task {
  constructor(taskContext) {
    //Create the item li
    this.createLi(taskContext)
  }

  createLi(taskContext) {
    let liEl = document.createElement('li')
    liEl.classList.add('task')

    let inputEl = document.createElement('input');
    inputEl.type = "text"
    inputEl.value = taskContext;
    inputEl.disabled = true;
    inputEl.classList.add('desc')

    let selectEl = document.createElement('select')    
    selectEl.classList.add('.mark')
    selectEl.appendChild(document.createElement('option')).innerHTML = 'Priority'
    selectEl.appendChild(document.createElement('option')).innerHTML = 'High'
    selectEl.appendChild(document.createElement('option')).innerHTML = 'Medium'
    selectEl.appendChild(document.createElement('option')).innerHTML = 'Low'

    let editEl = document.createElement('button')
    editEl.innerHTML = 'EDIT'
    editEl.classList.add('.edit')

    let removeEl = document.createElement('button')
    removeEl.innerHTML = 'REMOVE'
    removeEl.classList.add('.remove')

    ulEl.appendChild(liEl)

    liEl.appendChild(inputEl);
    liEl.appendChild(selectEl);
    liEl.appendChild(editEl);
    liEl.appendChild(removeEl);

    editEl.addEventListener('click', ()=>this.edit(inputEl))
    removeEl.addEventListener('click', ()=>this.remove(liEl))
  

  }

  edit(inputEl) {
    inputEl.disabled = !inputEl.disabled
  }

  remove(liEl) {
    ulEl.removeChild(liEl)
  }
}

function check () {
//   if (inputValue.value != ""){
//     new task (inputValue.value);
//     // inputValue.value=""
//   }
new task ('a')
alert('ok')
}

createEl.addEventListener('click',check)




new task ('b')
// new task ('c')



