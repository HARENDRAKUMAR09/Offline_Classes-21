const fs = require('fs');
const path = require('path');

let mapRoutes = (url,response) => {
    // home page
    if(url === '/'){
        fs.readFile(path.join(__dirname,'..' , 'views' , 'index.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
    // about page
    else if(url === '/about'){
        fs.readFile(path.join(__dirname,'..' ,  'views' ,'about.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
    // contact page
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname,'..' ,  'views' ,'contact.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
    // services page
    else if(url === '/services'){
        fs.readFile(path.join(__dirname,'..' , 'views' , 'services.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
    // profile page
    else if(url === '/profile'){
        fs.readFile(path.join(__dirname,'..' , 'views' , 'profile.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
    // 404 page
    else {
        fs.readFile(path.join(__dirname,'..' , 'views' , '404.html'),'utf8',(err,data) => {
            if(err){
                throw err;
            }
            response.end(data);
        });
    }
};

module.exports = {
    mapRoutes
};