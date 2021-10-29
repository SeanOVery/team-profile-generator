const inquirer = require('inquirer'),
  fs = require('fs'),
  renderHTML = require('./src/renderHTML'),
  manager = require('./lib/manager'),
  engineer = require('./lib/engineer'),
  intern = require('./lib/intern')

const addMoreQuestion = [
  {
    type: 'confirm',
    message: 'Add another employee?',
    name: 'repeat',
    default: true
  }
]

const newEmployeeTypeQuestion = [
  {
    type: 'rawlist',
    message: 'What type of employee would you like to add',
    name: 'type',
    choices: ['Engineer', 'Intern']
  }
]

let employees = []

const init = () => {
  inquirer
    .prompt(manager.managerQuestions)
    .then(res => {
      employees.push(res)
      repeat()
    })
  
}

const repeat = () => {
  inquirer
    .prompt(addMoreQuestion)
    .then(res => {
      if (res.repeat) {
        newEmployee()
      } else {
        return console.log(employees)
      }
    })
}

const newEmployee = () => {
  inquirer
    .prompt(newEmployeeTypeQuestion)
    .then(res => {
      if(res.type === 'Engineer') {
        engineerInquire()
      } else {
        internInquire()
      }
    })
}

const engineerInquire = () => {
  inquirer
    .prompt(engineer.engineerQuestions)
    .then(res => {
      employees.push(res)
      repeat()
    })
}

const internInquire = () => {
  inquirer
    .prompt(intern.internQuestions)
    .then(res => {
      employees.push(res)
      repeat()
    })
}

const createFile = () => {
  
}

init()