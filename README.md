# Employee Summary Webpage Engine

This Node application will assist managers in generating a webpage that displays their team's basic info for quick access to emails and GitHub Profiles.

## Installation
---
Run `npm install` to install all dependencies

## Folder Structure
---
```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```
## Usage
---
1. Run `node apps.js` to start the application
2. Enter the number of users within your team
3. Enter the employees name > `ENTER`
4. Enter the employee's ID > `ENTER`
5. Enter the employee's email > `ENTER`
6. Select the employee's title > `ENTER`
7. If you selected Engineer, input their GitHub. If you selected Manager, input their office number. If you selected Intern, input their school
8. Repeat for all employees until you receive the "Success!" notification. 

    ![](images/CLI.gif)

9. Go to the `output` folder, find `team.html` and open it in your default web browser. this is your output web page for your team. It should look similar to below.

    ![](images/output.png)

## Tool & Resources
---
* [Bootstrap](https://getbootstrap.com/) - CSS framework used
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment

    ### Dependencies
    ---
    * [Inquirer](https://www.npmjs.com/package/inquirer) - for the CLI user interface. This will prompt user within the CLI for employee information.

## Running the Test
---
run `npm run test` in the root

## Assignment Challenges
---
### Template Literals

The most difficult part of this homework was to figure out how to use template literals placed in external html files and use them in javascript. I tried using fs.readFile and functions, but non will implement the template literals in javascript. I have found from a classmate he used eval() function. When I used it, it worked perfectly. The issue is that eval() should never be used because of security. I have not found any other way and as of right now. I am still searching for a better alternative than using eval().