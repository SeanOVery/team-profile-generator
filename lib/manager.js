const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }

  getRole() {
    return 'Manager'
  }
}

const managerQuestions = [
  {
    type: 'input',
    message: `Enter your manager's name: `,
    name: 'name'
  },
  {
    type: 'input',
    message: `Enter your manager's ID Number: `,
    name: 'id'
  },
  {
    type: 'input',
    message: `Enter your manager's email: `,
    name: 'email'
  },
  {
    type: 'input',
    message: `Enter your manager's office number: `,
    name: 'officeNumber'
  }
]

module.exports = {
  Manager,
  managerQuestions
}