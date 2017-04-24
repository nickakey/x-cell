//The MACRO of whats happening on this page

//Is that we built a server, so that when a browser requests "localHost:3000", they are served up a folder called 'public'

//To understand all of this code, I should google "How to create express Server"


const http = require('http') 
const express = require('express')
const app = express(); 


//the const express & const app lines are both used whenever you want to use express. 


app.use(express.static('public')); //Express allows us to host static files that will be fed to the browser after a get request

app.set('port', process.env.PORT || 3000);  //this is setting the port. I'm not really entirely sure how it works though. 

const server = http.createServer(app);  

server.listen(app.get('port'), () => {   //this is telling server.listen to listen on port (which is defined in app.set)
	console.log(`Server listening on port ${app.get('port')}...`) //this is a call back function to confirm that port is listening
});



