 const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');

 const profileDataArgs = process.argv.slice(2);

 const [name, github] = profileDataArgs;

 const generatePage = (name, github) => {
     return `
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Portfolio Demo</title>
       </head>

       <body>
        <h1>${name}</h1>
        <h2><a href="https:github.com/${github}">Github</a></h2>
       </body>
       </html> 
       `;   
 };

 fs.writeFile('./index.html', generatePage(name, github), err => {
     if (err) throw new Error(err);
       
        console.log('')
    });

    inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message:'What is your name?'
        }
    ])
    .then(answers => console.log(answers));