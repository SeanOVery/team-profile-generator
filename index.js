const inquirer = require('inquirer'),
  fs = require('fs'),
  renderHTML = require('./src/renderHTML'),
  manager = require('./lib/manager'),
  engineer = require('./lib/engineer'),
  intern = require('./lib/intern')

  let employees = [],
    employeeCards = []

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

const init = () => {
  inquirer
    .prompt(manager.managerQuestions)
    .then(res => {
      employees.push(new manager.Manager(res.name, res.id, res.email, res.officeNumber))
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
        createFile()
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
      employees.push(new engineer.Engineer(res.name, res.id, res.email, res.github))
      repeat()
    })
}

const internInquire = () => {
  inquirer
    .prompt(intern.internQuestions)
    .then(res => {
      employees.push(new intern.Intern(res.name, res.id, res.email, res.school))
      repeat()
    })
}

const createFile = () => {
  employeeCards = renderHTML.generateCards(employees)
  fs.writeFile('index.html', renderHTML.generateHTML(employeeCards), (err) =>
  err ? console.error(err) : console.log('Webpage Created!')
  );
}

init()