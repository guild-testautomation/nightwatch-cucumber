# nightwatch
Nightwatch js example project

# Installation steps

1. Download nodejs, from [this website](https://nodejs.org/en/) and install it. 
2. Download this repository [through this link](https://github.com/guild-testautomation/nightwatch/archive/master.zip). **Note** subsitute this step for the step described in the "optionals" section if you want to use git. 
3. Extract the archive to a directory where you can easily find it again. 
4. Navigate to the directory and open a commandline in that directory. 
5. Type `npm install` and wait for it to finish
6. Type `npm start` to start the example test. 


## Optionals

### Use git to download the repository and easily pull in updates. 

1. Install git 
2. Navigate with a commandline to a directory where you want to download this repository
3. Type `git clone https://github.com/guild-testautomation/nightwatch.git`

### Use visual studio code and ESlint to help you write automation code. 

This project is configured with [ESlint](https://eslint.org/) to alert you to issues with your code ranging from plain errors and potential errors and bad practices. 
Visual Studio Code is a free editor made by microsoft that supports ESlint and also makes code easier to read through syntax highlighting. 

1. Install ESlint with the commandline command `npm install -g eslint`
2. Install [Visual Studio Code](https://code.visualstudio.com/download)
3. In VS Code go to the extensions menu (Ctrl+Shift+X) and install the ESlint extension. 
4. Open the nightwatch directory in VS code. 


# Resources 

- [Documentation](http://nightwatchjs.org/api/)
    - [Expects](http://nightwatchjs.org/api/#expect-api) let you define what you expect to see/happen/etc
    - [Asserts](http://nightwatchjs.org/api#assertions) assert that a situation is as it is described 
    - [General commands](http://nightwatchjs.org/api#commands) to navigate a page.
    - [WebDriver Protocol commands](http://nightwatchjs.org/api#protocol) are mapped to selenium commands. 
