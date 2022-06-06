const  createTeam = (lineup) => {
    
    const teamInfo = [];

    const createManager = manager => {
        let managerInfo = `
        <div  class="card"> 
        <div class = "container"> ${manager.name}  </div> <br/>
        <ul> 
            <li> ${manager.id} </li>
            <li><a href = "mailto:${manager.email}?subject=gujhi&body=gfghvjbklkm"></li>
            <li> ${manager.officeNumber} </li>
        </ul>
        </div>
        `
        teamInfo.push(managerInfo);
    }
    const createEngineer = engineer => {
        let engineerInfo = `
        <div  class = "card"> 
        <div class = "container"> ${engineer.name}  </div> <br/>
        <ul> 
            <li> ${engineer.id} </li>
            <li><a href = "mailto:${engineer.email}?subject=gujhi&body=gfghvjbklkm"> </li>
            <li><a href = "${engineer.github}"> </li>
        </ul>
        </div>`
        teamInfo.push(engineerInfo);
    }
    const createIntern = intern => {
        let internInfo = `
        <div  class = "card"> 
        <div  class = "container"> ${intern.name}  </div> <br/>
        <ul> 
            <li> ${intern.id} </li>
            <li><a href = "mailto:${intern.email}?subject=gujhi&body=gfghvjbklkm"></li>
            <li> ${intern.school} </li>
        </ul>
        </div>`
        teamInfo.push(internInfo);
    }
    const createEmployee = employee => {
        let employeeInfo = `
        <div  class = "card"> 
        <div  class = "container"> ${employee.name}  </div> <br/>
        <ul> 
            <li> ${employee.id} </li>
            <li><a href ="mailto:${employee.email}?subject=gujhi&body=gfghvjbklkm"></li>
        </ul>
        </div>`
        teamInfo.push(employeeInfo);
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
        if (lineup[i].returnRole() === "Employee") {
            createEmployee(lineup[i]);
        }  teamInfo.join("")
    }


return teamInfo;


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

    <main> ${createTeam(lineup)} </main>
</body>
</html>
    `;
}
// mailto:${manager.email}?subject=gujhi&body=gfghvjbklkm
// ${manager.email}