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
    <div class="card">
        <div class="container">
            <h2>Manager: ${lineup[0].name}</h2>
       </div>
       <p>Id: ${lineup[0].id}</p>
       <p>email: ${lineup[0].email}</p>
       <p>Office number: ${lineup[0].officeNumber}</p>
    </div>
    <div class="card">
        <div class="container">
            <h2>Engineer: ${lineup[0].name}</h2>
        </div>
        <p>Id: ${lineup[0].id}</p>
        <p>email: ${lineup[0].email}</p>
        <p>Github: ${lineup[0].github}</p>
    </div>
    <div class="card">
    <div class="container">
            <h2>Engineer: ${lineup[0].name}</h2>
        </div>
        <p>Id: ${lineup[0].id}</p>
        <p>email: ${lineup[0].email}</p>
        <p>Github: ${lineup[0].github}</p>
    </div>
    <div class="card">
            <h2>Engineer: ${lineup[0].name}</h2>
    </div>
    <p>Id: ${lineup[0].id}</p>
    <p>email: ${lineup[0].email}</p>
    <p>Github: ${lineup[0].github}</p>
    </div>
    <div class="card">
        <div class="container">
            <h2>Intern: ${lineup[0].name}</h2>
        </div>
        <p>Id: ${lineup[0].id}</p>
        <p>email: ${lineup[0].email}</p>
        <p>School: ${lineup[0].school}</p>
    </div>
    
</body>
</html>
    `
}