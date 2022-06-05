const  createTeam = (lineup) => {
    
    const teamInfo = [];

    const createManager = manager => {
        let managerInfo = `
        <div  class="card"> 
        <div "container"> ${manager.name}  </div> <br/>
        <ul> 
            <li> ${manager.id} </li>
            <li> ${manager.email} </li>
            <li> ${manager.officeNumber} </li>
        </ul>
        </div>
        `
        teamInfo.push(managerInfo);
    }
    const createEngineer = engineer => {
        let engineerInfo = `
        <div  class="card"> 
        <div "container"> ${engineer.name}  </div> <br/>
        <ul> 
            <li> ${engineer.id} </li>
            <li> ${engineer.email} </li>
            <li> ${engineer.officeNumber} </li>
        </ul>
        </div>`
        teamInfo.push(engineerInfo);
    }
    const createIntern = intern => {
        let internInfo = `
        <div  class="card"> 
        <div "container"> ${intern.name}  </div> <br/>
        <ul> 
            <li> ${intern.id} </li>
            <li> ${intern.email} </li>
            <li> ${intern.officeNumber} </li>
        </ul>
        </div>`
        teamInfo.push(internInfo);
    }
    
    //add mail to links for emails
    
   

    for (let i = 0; i < lineup.length; i++) {
        if (lineup[i].returnRole() === "Manager") {
           createManager(lineup[i]);
        }
        if (lineup[i].returnRole() === "Engineer") {
            createEngineer(lineup[i]);
        }
        if (lineup[i].returnRole() === "Intern") {
            createIntern(lineup[i]);
        }
    }





}

module.exports = lineup => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head class="header">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Here's your team!</title>
</head>
<body>
    <header>
    <h1> My Crew </h1>
    </header>

    <main> My ${createTeam(lineup)} </main>
</body>
</html>
    `;
}
