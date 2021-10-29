const Employee = require('./employee')

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }

  getRole() {
    return 'Engineer'
  }

  getGithub() {
    return this.github
  }
}

const engineerQuestions = [
  {
    type: 'input',
    message: `Enter your engineer's name: `,
    name: 'name'
  },
  {
    type: 'input',
    message: `Enter your engineer's ID Number: `,
    name: 'ID'
  },
  {
    type: 'input',
    message: `Enter your engineer's email: `,
    name: 'email'
  },
  {
    type: 'input',
    message: `Enter your engineer's github username: `,
    name: 'github'
  }
]

module.exports = {
  Engineer,
  engineerQuestions
}