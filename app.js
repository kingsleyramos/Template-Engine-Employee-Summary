const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

let team = [];
let position = "";
let teamSize;

const managerQ = [
    {
        type: "input",
        message: "What is your Manager's Office Number?",
        name: "officeNo"
    }
];

const internQ = [
    {
        type: "input",
        message: "What school is your Intern attending?",
        name: "school"
    }
];

const engineerQ = [
    {
        type: "input",
        message: "What is your Engineer's GitHub?",
        name: "github"
    }
];


async function start(){
    console.log("Let's make your Dream Team!");
    let teamHTML = "";

    await inquirer.prompt(
        {
            type: "number",
            message: "How many people are in your team?",
            name: "noOfTeamMem"
        }
    )
    .then((data) => {
        teamSize = data.noOfTeamMem + 1;
    });
    
    // If Team Size is 0
    if (teamSize === 0){
        console.log("I guess there is no one on your team...");
        return;
    }
    
    for(i = 1; i < teamSize; i++){

        let name;
        let id;
        let title;
        let email;

        await inquirer.prompt([ 
            {
                type: "input",
                message: `What is employee (${i})'s name?`,
                name: "name"
            },
            {
                type: "input",
                message: `What is the employee (${i})'s id?`,
                name: "id"
            },
            {
                type: "input",
                message: `What is the employee (${i})'s Email?`,
                name: "email"
            },
            {
                type: "list",
                message: `what the employee (${i})'s title?`,
                name: "title",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then((data) => {
            name = data.name;
            id = data.id;
            title = data.title;
            email = data.email;
        });

        switch (title){
            case "Manager":
                await inquirer.prompt(managerQ)
                .then((data) => {
                    const manager = new Manager(name, id, email, data.officeNo);

                    teamMember = fs.readFileSync("templates/manager.html");
            
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

                });
                break;
            case "Intern":
                await inquirer.prompt(internQ)
                .then((data) => {
                    const intern = new Intern(name, id, email, data.school);

                    teamMember = fs.readFileSync("templates/intern.html");
            
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;
            case "Engineer":
                await inquirer.prompt(engineerQ)
                .then((data) => {
                    const engineer = new Engineer(name, id, email, data.github);

                    teamMember = fs.readFileSync("templates/engineer.html");
            
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

                });
                break;
        }
    }

    const mainHTML = fs.readFileSync("templates/main.html");
            
    teamHTML = eval('`'+ mainHTML +'`');

    fs.writeFile("output/DreamTeam.html", teamHTML, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });


    //console.log(teamMember);

    


    // for (i=0; i < team.length; i++){
    //     let teamMember;

    //     if (team[i].getRole() === "Manager"){

    //         // console.log(team[i].name);
    //         // console.log(team[i].getRole());
    //         // console.log(team[i].id);
    //         // console.log(team[i].email);
    //         // console.log(team[i].officeNumber);

    //         teamMember = fs.readFileSync("templates/manager.html");
            
    //         teamHTML = teamHTML + eval('`'+ teamMember +'`');

    //         // fs.readFileSync("templates/engineer.html", "utf8", (err, htmlFile) => {
    //         //     if (err) { return console.log(err); }
            
    //         //     teamMember = eval('`'+ htmlFile +'`');
    //         // });
    //     }
    //     else if (team[i].getRole() == "Intern"){
    //         fs.readFileSync("templates/intern.html", "utf8", (err, htmlFile) => {
    //             if (err) { return console.log(err); }
    //             //teamHTML = teamHTML + eval('`'+ htmlFile +'`');
    //         });
    //     }
    //     else if (team[i].getRole() == "Engineer"){
    //         fs.readFileSync("templates/engineer.html", "utf8", (err, htmlFile) => {
    //             if (err) { return console.log(err); }
    //             //teamHTML = teamHTML + eval('`'+ htmlFile +'`');
    //         });
    //     }
    // }


    //console.log(team[0].name);
    //console.log(team[0].getRole());

    console.log(teamHTML);
    //generateTeamHTML(team);
}

async function generateTeamHTML(teamArray){
    let teamHTML;

    for (i=0; i < teamArray.length; i++){

        if (teamArray[i].getRole() == "Manager"){
            fs.readFile("templates/engineer.html", "utf8", function(err, htmlFile) {
                if (err) { return console.log(err); }
                console.log(teamArray[i].name);
                console.log(teamArray[i].getRole);
                console.log(teamArray[i].id);
                console.log(teamArray[i].email);
                console.log(teamArray[i].officeNumber);
                //teamHTML = teamHTML + eval('`'+ htmlFile +'`');
            });
        }
        else if (teamArray[i].getRole() == "Intern"){
            fs.readFile("templates/intern.html", "utf8", (err, htmlFile) => {
                if (err) { return console.log(err); }
                //teamHTML = teamHTML + eval('`'+ htmlFile +'`');
            });
        }
        else if (teamArray[i].getRole() == "Engineer"){
            fs.readFile("templates/engineer.html", "utf8", (err, htmlFile) => {
                if (err) { return console.log(err); }
                //teamHTML = teamHTML + eval('`'+ htmlFile +'`');
            });
        }
    }

    console.log(teamHTML);
}

start();