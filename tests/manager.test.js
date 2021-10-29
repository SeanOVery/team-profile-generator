const manager = require('../lib/manager')

describe('Manager tests', () => {
  test('Expect new Manager to have a name, id, and email and office number', () => {
    const person = new manager.Manager('Bob', 12, 'email@email.com', 214)
    
    expect(person).toHaveProperty('name')
    expect(person).toHaveProperty('id')
    expect(person).toHaveProperty('email')
    expect(person).toHaveProperty('officeNumber')
    expect(person.name).toBe('Bob')
    expect(person.id).toBe(12)
    expect(person.email).toBe('email@email.com')
    expect(person.officeNumber).toBe(214)
  })
  
  test('Expect getName to return the Manager name', () => {
    const person = new manager.Manager('Bob', 12, 'email@email.com', 214)
    
    expect(person.getName()).toBe('Bob')
  })
  
  test('Expect getId to return the Manager id', () => {
    const person = new manager.Manager('Bob', 12, 'email@email.com', 214)
    
    expect(person.getId()).toBe(12)
  })
  
  test('Expect getEmail to return the Manager email', () => {
    const person = new manager.Manager('Bob', 12, 'email@email.com', 214)
    
    expect(person.getEmail()).toBe('email@email.com')
  })
  
  test('Expect getRole to return the Manager role', () => {
    const person = new manager.Manager('Bob', 12, 'email@email.com', 214)
    
    expect(person.getRole()).toBe('Manager')
  })
})