const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const engineers = []
const interns = []




const ManagerQ = () => {
    inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "Enter team manager's name:"
        },
        {
            name: "managerID",
            type: "input",
            message: "Enter team manager's employee ID:"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "Enter team manager's email address:"
        },
        {
            name: "managerOfficeN",
            type: "input",
            message: "Enter team manager's office number:"
        },
        {
            name: "ContOrFin",
            type: "list",
            message: "Add another team member?",
            choices: ["Add an Engineer", "Add an Intern", "Finish building team"]
        },
    ]).then(ans=>{
        console.log(ans.ContOrFin)
        if (ans.ContOrFin==="Add an Engineer"){
            addEngineer();
        } if (ans.ContOrFin==="Add an Intern"){
            addIntern();
        }else {
            console.log("done")
        }
    })
    }

const addEngineer = () =>{
    inquirer.prompt([
        {
            name: "EngineerName",
            type: "input",
            message:"Enter engineer's name:",
        },
        {
            name: "EngineerID",
            type: "input",
            message:"Enter engineer's ID:",
        },
        {
            name: "EngineerEmail",
            type: "input",
            message:"Enter engineer's email:",
        },
        {
            name: "EngineerGithub",
            type: "input",
            message:"Enter engineer's GitHub username:",
        },

    ]).then(ans =>{
        const newEngineer = new Engineer(ans.EngineerName, ans.EngineerID, ans.EngineerEmail, ans.EngineerGithub)
        console.log(newEngineer)
        engineers.push(newEngineer)
    })
}

const addIntern = () => {
    inquirer.prompt([
    {
        name: "InternName",
        type: "input",
        message:"Enter intern's name:",
    },
    {
        name: "InternID",
        type: "input",
        message:"Enter intern's ID:",
    },
    {
        name: "InternEmail",
        type: "input",
        message:"Enter intern's email:",
    },
    {
        name: "InternSchool",
        type: "input",
        message:"Enter intern's school:",
    }
]).then(ans =>{
    const newIntern = new Intern(ans.InternName, ans.InternID, ans.InternEmail, ans.InternSchool)
    console.log(newIntern)
    interns.push(newIntern)
})
}


ManagerQ();


