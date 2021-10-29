const Engineer = require('../lib/engineer')

describe('Engineer tests', () => {
  test('Expect new Engineer to have a name, id, and email and office number', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    
    expect(person).toHaveProperty('name')
    expect(person).toHaveProperty('id')
    expect(person).toHaveProperty('email')
    expect(person).toHaveProperty('github')
    expect(person.name).toBe('Bob')
    expect(person.id).toBe(12)
    expect(person.email).toBe('email@email.com')
    expect(person.github).toBe('bobsrepos')
  })
  test('Expect getName to return the Engineer name', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    expect(person.getName()).toBe('Bob')
  })
  test('Expect getId to return the Engineer id', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    expect(person.getId()).toBe(12)
  })
  test('Expect getEmail to return the Engineer email', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    expect(person.getEmail()).toBe('email@email.com')
  })
  test('Expect getGithub to return the Engineer email', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    expect(person.getGithub()).toBe('bobsrepos')
  })
  test('Expect getRole to return the Engineer role', () => {
    const person = new Engineer('Bob', 12, 'email@email.com', 'bobsrepos')
    expect(person.getRole()).toBe('Engineer')
  })
})