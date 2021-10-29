const intern = require('../lib/intern')

describe('Intern tests', () => {
  test('Expect new Intern to have a name, id, and email and office number', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person).toHaveProperty('name')
    expect(person).toHaveProperty('id')
    expect(person).toHaveProperty('email')
    expect(person).toHaveProperty('school')
    expect(person.name).toBe('Bob')
    expect(person.id).toBe(12)
    expect(person.email).toBe('email@email.com')
    expect(person.school).toBe('GA Tech')
  })

  test('Expect getName to return the Intern name', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person.getName()).toBe('Bob')
  })

  test('Expect getId to return the Intern id', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person.getId()).toBe(12)
  })

  test('Expect getEmail to return the Intern email', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person.getEmail()).toBe('email@email.com')
  })

  test('Expect getSchool to return the Intern email', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person.getSchool()).toBe('GA Tech')
  })

  test('Expect getRole to return the Intern role', () => {
    const person = new intern.Intern('Bob', 12, 'email@email.com', 'GA Tech')

    expect(person.getRole()).toBe('Intern')
  })
})
