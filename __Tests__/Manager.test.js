const Manager = require('../lib/Manager');
const employee = new Manager('Consuela', '78456374', 'suelasuey@gmail.com', 'Office Number 8');

test('test to get super constructor', () => {
    expect(employee.name).toBe('Consuela');
    expect(employee.id).toBe('78456374');
    expect(employee.email).toBe('suelasuey@gmail.com');
});

test('test if we can get the office number', () => {
    expect(employee.returnOfficeNumber()).toBe('Office Number 8')
});