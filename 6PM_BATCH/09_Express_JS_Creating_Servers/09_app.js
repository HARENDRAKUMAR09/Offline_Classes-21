const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// for normal html tags
app.get('/',(request,response) => {
    response.send(`<h2 style="color: blueviolet">Welcome to Express JS</h2>`);
});

// for complete HTML Page
app.get('/home',(request,response) => {
    response.sendFile(path.join(__dirname , 'index.html'));
});

// for json response
app.get('/json',(request,response) => {
    let employees = [
        {
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            active : true
        },
        {
            name : 'John',
            age : 45,
            designation : 'Sr. Manager',
            active : false
        },
        {
            name : 'Wilson',
            age : 50,
            designation : 'Chief Technical Officer',
            active : true
        },
        {
            name : 'Laura',
            age : 23,
            designation : 'Software Trainee',
            active : false
        }
    ];
    response.json(employees);
});

// for file download
app.get('/download',(request,response) => {
    response.download(path.join(__dirname,'ui_development.pptx'));
});

app.listen(port,hostname, () => {
    console.log(`server is started at http://${hostname}:${port}`);
});


