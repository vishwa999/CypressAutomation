# Cypress
   Cypress is UI Automation Tool which is build on Mocha framework which will be helpfull to automate UI as well as request on the flow and it allows userful features like Test Runner, takes screenshot and do video's on it own after integrating the frame to Cypress Dashboad.
## How to run CypressPOMFrameWork after download to local
   * Download Node.js and install it, after installation  update the Environment veriable with path EX:- C:\Program Files\nodejs
   * Install visual Studio
   * After installation click on File-> Open Folder, Now browse to the folder where we have framework.
   * Now open the terminal in visual studio use Ctr-c.
   * Now run command $ npm install
      * as we are all ready mentioned all the release versions related to Cypress, Mocha and Mochawesome
        after running this command all the software's will be installed.
## Open Test Runner
   * In the same terminal enter $npm cypress open.
   * ypu will get list of test cases which are there in Integration folder and you can run each test cases and will generate the Mochawesome reports in HTML format.

## Highlights of this framework
   * This framework designed ad Page Object Model.
   * Userd parameterized commands which resides in support folder as commands.js.
   * For each page we have PageObjects folder which comes under Support folder.
     * GreenKartPageObjects ->HomePage.js, ProductPage.js, CartPage.js, CheckOutPage.js
     * PageObjects-> HomePage.js,LoginPage.js, RegisterPage.js

    