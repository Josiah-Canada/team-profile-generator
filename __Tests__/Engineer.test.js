const Engineer = require('../lib/Engineer');
const employee = new Engineer('Harry', '7654321', 'Wizardharry@gmail.com', 'Harry-Potter');

test('test if we can get the super constructor', () => {
    expect(employee.name).toBe('Harry');
    expect(employee.id).toBe('7654321');
    expect(employee.email).toBe('Wizardharry@gmail.com');
});

test('test if we can get the git hub account', () => {
    expect(employee.returnGithub()).toBe('Harry-Potter');
});
