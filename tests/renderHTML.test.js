 const render = require('../src/renderHTML'),
  engineer = require('../lib/engineer'),
  manager = require('../lib/manager'),
  intern = require('../lib/intern')

 describe('generateCards tests', () => {
   test('entering an engineer object should render an engineer card', () => {
     const person = [new engineer.Engineer('bob', 12, 'email@email.com', `bobsrepos`)],
      result = render.generateCards(person),
      expectedResults = [`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/bobsrepos" class="card-link">bobsrepos</a></li>
        </ul>
        </div>`]

      expect(result).toEqual(expectedResults)
   })
   test('entering an manager object should render an engineer card', () => {
    const person = [new manager.Manager('bob', 12, 'email@email.com', 214)],
     result = render.generateCards(person),
     expectedResults = [`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">Office Number: 214</li>
        </ul>
        </div>`]

     expect(result).toEqual(expectedResults)
  })
  test('entering an intern object should render an engineer card', () => {
    const person = [new intern.Intern('bob', 12, 'email@email.com', 'GA Tech')],
     result = render.generateCards(person),
     expectedResults = [`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">School: GA Tech</li>
        </ul>
        </div>`]

     expect(result).toEqual(expectedResults)
  })
 })

 describe('generateHTML tests', () => {
   test('full html page should be generated', () => {
    const employees = render.generateCards([new manager.Manager('bob', 12, 'email@email.com', 214), new engineer.Engineer('bob', 13, 'email@email.com', `bobsrepos`), new intern.Intern('bob', 14, 'email@email.com', 'GA Tech')]),
      result = render.generateHTML(employees),
      expectedResults = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
    <style>
      body {
        height: 100vh;
        width: 100vw;
       
      }
      .card {
        margin-top: 2rem;
      }
    </style>
  </head>
  <body class="bg-dark">
    <header>
      <nav class="container-fluid-nav bg-secondary d-flex justify-content-around align-content-around" style="height: 3rem">
        <span class="navbar-brand mb-0 h1 fs-2">My Team</span>
      </nav>
    </header>
    <div class="container d-flex justify-content-around bg-dark flex-wrap align-content-around">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 12</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">Office Number: 214</li>
        </ul>
        </div>\r\n<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 13</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/bobsrepos" class="card-link">bobsrepos</a></li>
        </ul>
        </div>\r\n<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">bob</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 14</li>
          <li class="list-group-item">Email: <a href="mailto:email@email.com">email@email.com</a></li>
          <li class="list-group-item">School: GA Tech</li>
        </ul>
        </div>
    </div>
  </body>
  </html>`

      expect(result).toEqual(expectedResults)
   })
 })