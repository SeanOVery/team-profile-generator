const generateCards = (people) => {
  let cardTemplate = []
  people.forEach(el => {
    switch (el.getRole()) {
      case 'Manager':
        cardTemplate.push(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${el.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${el.email}">${el.email}</a></li>
          <li class="list-group-item">Office Number: ${el.officeNumber}</li>
        </ul>
        </div>`)
        break;
      case 'Engineer':
        cardTemplate.push(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${el.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${el.email}">${el.email}</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/${el.github}" class="card-link">${el.github}</a></li>
        </ul>
        </div>`)
        break;
      case 'Intern':
        cardTemplate.push(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${el.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${el.email}">${el.email}</a></li>
          <li class="list-group-item">School: ${el.school}</li>
        </ul>
        </div>`)
        break;
    }
  });
  return cardTemplate
}

const generateHTML = (data) => {
return  `<!DOCTYPE html>
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
      ${data.join('\r\n')}
    </div>
  </body>
  </html>`
}

module.exports = {
  generateHTML,
  generateCards
}