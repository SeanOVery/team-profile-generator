const Employee = require('./employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }

  getRole() {
    return 'Intern'
  }

  getSchool() {
    return this.school
  }
}

const internQuestions = [
  {
    type: 'input',
    message: `Enter your intern's name: `,
    name: 'name'
  },
  {
    type: 'input',
    message: `Enter your intern's ID Number: `,
    name: 'id'
  },
  {
    type: 'input',
    message: `Enter your intern's email: `,
    name: 'email'
  },
  {
    type: 'input',
    message: `Enter your intern's school: `,
    name: 'school'
  }
]

module.exports = {
  Intern,
  internQuestions
}