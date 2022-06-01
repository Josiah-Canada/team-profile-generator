const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createSite = require('./src/create-site.js');
const OUTPUT_DIR = "./dist/"
console.log("answer the following questions to generate a Team-profile.")


const crew = [];

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
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        crew.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: "please select an option below:",
            choices: ['add an engineer', 'add an intern', 'finish building my team']
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
                    default:
                        yourTeam();
            }
        });
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
            name: "employeeId",
            message: "what's your employee Id? (required)",
            validate: employeeId => {
                if (employeeId) {
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
            name: "githunUserName",
            message: "what's your gihun user name? (required)",
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log("enter a github user name");
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.githubName);
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
             name: "employeeId",
             message: "what's your employee id? (required)",
             validate: employeeID => {
                 if (employeeID) {
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
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        crew.push(Intern);
        promptMenu();
    })
};

const yourTeam = () => {
    console.log(`
    ====================
    My team is complete
    ====================
    `);

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(OUTPUT_DIR + "lineup.html", createSite(crew), "utf-8");
}

promptManager();