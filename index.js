const express = require('express');
const app = express();
const {port = 3000} = process.env;

const fs = require('fs');
const os = require('os');

app.get('/', (req, res)=> {
    return res.send('Hello World!');
})


console.log('Choose an option:');
console.log('1. Read Package.json');
console.log('2. Display OS info');
console.log('3. Start HTTP server');

const inquirer = require('inquirer');
let question = [
    {
        type: 'input',
        name: 'name',
        message: "Enter a number: "
    }
]

inquirer.prompt(question).then(answer => {
    switch (answer.name) {
        case '1':
        {
            fs.readFile('package.json', 'utf8', function(err, data) {
                console.log(data);
            });
            break;
        }
        case '2':
        {
            console.log('Getting OS info...');
            console.log('SYSTEM MEMORY: ' + parseInt(os.totalmem() / 1024 / 1024 /1024) + ' GB');
            console.log('FREE MEMORY: ' + parseInt(os.freemem() / 1024 / 1024 / 1024) + ' GB');
            console.log('CPU CORES: ' + os.cpus().length);
            console.log('ARCH: ' + os.arch());
            console.log('PLATFORM: ' + os.platform());
            console.log('RELEASE: ' + os.release());
            console.log('USER: ' + os.userInfo().username);
            break;
        }
        case '3':
        {
            app.listen(port, ()=> console.log(`Server started on port ${port}...`));
            break;
        }
        default:
        {
            console.log('Invalid input');
            break;
        }
    }
})