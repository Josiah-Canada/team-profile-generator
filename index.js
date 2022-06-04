// create paths for all objects and outputs
const path = require("path")
const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createSite = require('./src/create-site.js');
const OUTPUT_DIR = "./dist/"
const Employee = require('./lib/Employee');
console.log("answer the following questions to generate a Team-profile.")

// object variable for when program is run
const crew = [];
// prompt the manager questions at the star of program
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what's your name? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "id",
            message: "what's your id? (required)",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What's your email address? (required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            } 
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What's your office number? (required)",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        crew.push(manager);
        promptMenu();
    })
};
// open a menu that allows you to add more employees to your roster
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: "please select an option below:",
            choices: ['add an engineer', 'add an intern', 'finish building my team', 'add an employee']
        }])
        .then(choice => {
            console.log(choice)
            switch (choice.menu) {
                case "add an engineer": 
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                case "add an employee":
                    promptEmployee();
                    break;
                    default:
                        yourTeam();
            }
        });
};
// prompting employee roles
const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what's your employees name?, (requireed)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
            
        },
        {
            type: "input",
            name: "id",
            message: "What's your employee id? (required)",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("enter your id.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What's your email address? (required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("enter an email address.");
                    return false;
                }
            } 
        },
    ]).then(answers => {
        console.log(answers);
        const employee = new Employee(answers.name, answers.id, answers.email)
        crew.push(employee);
        promptMenu();
    })
};

const promptEngineer = () => {
    console.log(`
    ================
    Add a Engineer
    ================
    `);
    return  inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what's your engineer's name? (required)",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("please give your engineer a name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "what's your employee Id? (required)",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("please enter an employee id.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "what's your email? (required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("please enter an email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "what's your gihun user name? (required)",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("enter a github user name");
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        crew.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    =========
    add intern
    =========
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what's your intern's name? (required)",
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log('Please enter your interns name.');
                    return false;
                }
            }
         },
         {
             type: "input",
             name: "id",
             message: "what's your employee id? (required)",
             validate: id => {
                 if (id) {
                     return true;
                 } else {
                     console.log("please enter an employee id?");
                     return false;
                 }
             }
         },
         {
             type: "input",
             name: "email",
             message: "what's your email? (required)",
             validate: email => {
                 if (email) {
                     return true;
                 } else {
                     console.log("please enter an email");
                     return false;
                 }
              }
         },
         {
             type: "input",
             name: "school",
             message: "what school do you attenf? (required)",
             validate: school => {
                 if (school) {
                     return true;
                 } else {
                     console.log("please enter a valid school");
                     return false;
                 }
             }
         }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        crew.push(intern);
        promptMenu();
    })
};
// adds team members to crew object and completes the run of the program
const yourTeam = () => {
    console.log(`
    ====================
    My team is complete
    ====================
    `);
    console.log(crew)
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(path.join(OUTPUT_DIR, "lineup.html"), createSite(crew), "utf-8");
}

promptManager();