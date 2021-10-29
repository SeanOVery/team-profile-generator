const Employee = require('../lib/employee.js')

describe('Employee tests', () => {
  test('Expect new Employee to have a name, id, and email', () => {
    const person = new Employee('Bob', 12, 'email@email.com')
    
    expect(person).toHaveProperty('name')
    expect(person).toHaveProperty('id')
    expect(person).toHaveProperty('email')
    expect(person.name).toBe('Bob')
    expect(person.id).toBe(12)
    expect(person.email).toBe('email@email.com')
  })
  test('Expect getName to return the employee name', () => {
    const person = new Employee('Bob', 12, 'email@email.com')
    expect(person.getName()).toBe('Bob')
  })
  test('Expect getId to return the employee id', () => {
    const person = new Employee('Bob', 12, 'email@email.com')
    expect(person.getId()).toBe(12)
  })
  test('Expect getEmail to return the employee email', () => {
    const person = new Employee('Bob', 12, 'email@email.com')
    expect(person.getEmail()).toBe('email@email.com')
  })
  test('Expect getRole to return the employee role', () => {
    const person = new Employee('Bob', 12, 'email@email.com')
    expect(person.getRole()).toBe('Employee')
  })
})