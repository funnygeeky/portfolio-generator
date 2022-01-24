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
    const promptUser = () => {
        return inquirer.prompt([
                {
                    type:'input',
                    name: 'name',
                    message:'What is your name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name:'github',
                    message:'Enter your GitHub Username (Required)',
                    validate:(githubNameInput) => {
                        if (githubNameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Github Username!');
                            return false;
                        }
                    }
                },
                {
                    type:'confirm',
                    name:'confirmAbout',
                    message:'Would you like to enter some information about yourself for an "About" section?',
                    default: true
                },
                {
                    type: 'input',
                    name: 'about',
                    message: 'Provide some nformation about yourself:',
                    when: ({confirmAbout}) => {
                        if (confirmAbout) {
                            return true;   
                        } else {
                            return false;
                        }
                    }
                },
            ])  
    };

    const promptProject = () => {
        console.log(`
        =================
        Add a New Project
        =================
        `);
        return inquirer.prompt([
            {
                type:'input',
                name: 'name',
                message: 'What is the name of your project? (Required)',
                validate: ProjectNameInput => {
                    if (ProjectNameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Project Name!');
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'description',
                message:'Provide a description of the project (Required)',
                validate: ProjectDescInput => {
                    if (ProjectDescInput) {
                        return true;
                    } else {
                        console.log('Please enter a Project Description!');
                        return false;
                    }
                }
            },
            {
                type:'checkbox',
                name:'languages',
                message:'What did you build this project with? (Check all that apply)',
                choices:['JavaScript', 'HTML','CSS','ES6','jQuery','Bootstrap','Node']
            },
            {
                type: 'input',
                name:'link',
                message: 'Enter the Github link to your project.(Required)',
                validate: GithubLinkInput => {
                    if (GithubLinkInput) {
                        return true;
                    } else {
                        console.log('Please enter your project\'\s Github link!');
                        return false;
                    }
            }
        },
            {
                type: 'confirm',
                name:'feature',
                message:'Would you like to feature this project?',
                default: false
            },
            
            {
                type:'confirm',
                name:'confirmAddProject',
                message:'Would you like to enter another project?',
                default: false
            },

            
        ])
    };
    promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));
    