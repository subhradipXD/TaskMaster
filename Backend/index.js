const express = require('express'); 

const app = express(); 
const PORT = 8080; 

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running on port", PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
