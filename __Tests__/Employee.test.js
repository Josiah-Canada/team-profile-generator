const Employee = require('../lib/Employee');
const employee = new Employee('Tommy', '78645678', 'tommygun@gmail.com');

test('test if we can get constructor values', () => {
    expect(employee.name).toBe('Tommy');
    expect(employee.id).toBe('78645678');
    expect(employee.email).toBe('tommygun@gmail.com');
});

test('test if we get name from returnName() method', () => {
    expect(employee.returnName()).toBe('Tommy');
});

test('test if we get the id from returnID()', () => {
    expect(employee.returnId()).toBe('78645678');
});

test('test if we get email from returmEmail()', () => {
    expect(employee.returnEmail()).toBe('tommygun@gmail.com');
});

test('test if we get an employees role from returnRole()', () => {
    expect(employee.returnRole()).toBe('Employee');
});