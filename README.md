# Homework 10: Template-Engine-Employee-Summary

## Project Goal

Build a command line application that creates a webpage that displays a manager's team's basic information

## Dependencies
 * fs
 * inquirer

## Challenges

### Template Literals

The most difficult part of this homework was to figure out how to use template literals placed in external html files and use them in javascript. I tried using fs.readFile and functions, but non will implement the template literals in javascript. I have found from a classmate he used eval() function. When I used it, it worked perfectly. The issue is that eval() should never be used because of security. I have not found any other way and as of right now. I am still searching for a better alternative than using eval().