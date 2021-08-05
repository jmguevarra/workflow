## Babel Guide
Converts new format of javascript to old format syntax for browsers compatibility.

### Babel Installation

1. In terminal/Command Propt, type 
    ```
    npm install @babel/core @babel/cli --save-dev 
    ```
2. Install Babel preset
    ```
    npm install @babel/preset-env --save-dev
    ```
3. Create file name it .babelrc

### Babel Guide
To convert the new syntax of javascript to in old format for browsers compatibility. You need to use Babel CLI.
Used this command to convert new model code of js file to old format.  It just a test
```sh
node_modules/.bin/babel before.js -o after.js //its a filename
```
If Errors occurs like Execution Policy try this commands in powershell
```sh
Set-ExecutionPolicy RemoteSigned
Get-ExecutionPolicy -List
Set-ExecutionPolicy -Scope [LocalMachine/CurrentUser] Unrestricted 
```

To apply the babel CLI in easiest way just goto package.json and under scripts object add babel then the following command.
    ```
    "scripts": {
        "babel": "node_modules/.bin/babel src/index.js -o dist/assets/bundle.js",
    },
    ```
From src/index.js all new format of javascript will be converted in old format of javascript in dist/assets/bundle.js then you can use it to add in your webpage for better compatibility.

then run npm run babel to convert new format to old in bundle.js

### Add Watch 
We can add flag -watch or -w in the scripts so everytime you made changes in src/index.js it will automatically run the scripts babel
    ```
    "scripts": {
        "babel": "node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js",
    }
    ```

Type npm run babel once and index.js will be converted in old format to bundle.js
```
npm run babel 
```

## Webpack
Bundled the set of modules of code into one file with babel. It compress all javascript to one line of code

### Installation
1. Create webpack.config.js. check the object there
2. Install Webpack and its CLI
    ```sh
    npm install webpack webpack-cli --save-dev
    ```
3. Run this command to run webpack CLI and compile module. Note all configuration is in webpack.config.js
    ```
    node_modules/.bin/webpack
    ```
4. Add webpack to scripts so its easy to run it
    ```
    "scripts": {
        "webpack": "node_modules/.bin/webpack" //Just here
    },
    ```
Note: Used webpack bundle if you are already finish with your code. Its totally a last part of action