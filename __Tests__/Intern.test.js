const Intern = require('../lib/Intern');
const employee = new Intern('Dawn', '79798678', 'newday@gmail.com', 'Howard-U');

test('test to get super constructor', () => {
    expect(employee.name).toBe('Dawn');
    expect(employee.id).toBe('79798678');
    expect(employee.email).toBe('newday@gmail.com');
});

test('test if we can get the school', () => {
    expect(employee.returnSchool()).toBe('Howard-U');
});
