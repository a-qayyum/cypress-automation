# Cypress Automation Project
This repository contains cypress automation with javascript

## Following test cases are covered in this project:
1. Login into the portal with Registered user
2. Verifying the login has been made with correct user
3. Go to Book Store 
4. Search for any specific book (In this case it is searching for 'Designing Evolvable Web APIs with ASP.NET')
5. Opening the detail of the book
6. User adds the book to his/her collection by clicking ‘Add to Your Collection’
7. User navigates to his/her profile
8. User checks whether the book is now part of his/her collection
9. User go to his/her profile and deletes the book
10. User log out from the portal

## Pre-requisites for running this project:
1. Node 
2. Cypress
3. VS Code

### Follow the procedure to test and try this automation project:
1. Open Visual Studio Code 
2. Clone this repo on your local workspace with command Git Clone 'Project URL'
3. Once the Project is cloned, open this into Microsoft visual studio code
4. Run '**npm install**' to download node modules and required packages
5. Run **npx cypress open** to open cypress
6. This screen should appear up when cypress is opened:
![Alt text](https://github.com/a-qayyum/cypress-automation/blob/8d4bbc1306632681760218136097778a282adcfb/Screenshot%202022-01-28%20at%205.37.15%20AM.png "Optional")
7. On Cypress UI, Click '**Run 2 integration specs**' to run the tests:
![Alt text](https://github.com/a-qayyum/cypress-automation/blob/5bf126c62abd42b0953a23432eff0b2e9eb35c6a/2.png "2")
8. A new chrome browser window will open up and execute the test cases


