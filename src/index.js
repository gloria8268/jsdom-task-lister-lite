const createEl = document.querySelector('input[type="submit"]')
const inputBarEl = document.querySelector('input[type="text"]')
const ulEl = document.querySelector('#tasks')

class Task {
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
    selectEl.classList.add('mark')
    selectEl.appendChild(document.createElement('option')).innerHTML = 'priotity'

    let option1El = document.createElement('option')
    option1El.className='high'
    option1El.innerHTML = 'High'
    selectEl.appendChild(option1El)

    let option2El = document.createElement('option')
    option2El.className='medium'
    option2El.innerHTML = 'Medium'
    selectEl.appendChild(option2El)


    let option3El = document.createElement('option')
    option3El.className='low'
    option3El.innerHTML = 'Low'
    selectEl.appendChild(option3El)    
   
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

    editEl.addEventListener('click', () => this.edit(inputEl))
    removeEl.addEventListener('click', () => this.remove(liEl))
  }

  edit(inputEl) {
    inputEl.disabled = !inputEl.disabled
  }

  remove(liEl) {
    ulEl.removeChild(liEl)
  }
}

function check(event) {
  event.preventDefault();
  if (inputBarEl.value != "") {
    new Task(inputBarEl.value)
  }
}

createEl.addEventListener('click', check);

// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

let priorityEls = document.querySelectorAll('.mark')
let optionEls = document.querySelectorAll('.mark')


// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks