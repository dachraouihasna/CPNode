const http = require('http')

function generatepwd() {

    var length = 12, charset = "0123456789@$+*-/abcdefghijklmnopqrstuvwxyz", 
    pwd = "";

    for ( var i = 0, n = charset.length; i<length; ++i)
     {
        pwd += charset.charAt(Math.floor(Math.random() * n));
     }

    return pwd;
    
}

const server = http.createServer((req, res ) => {   //this method turns the computer into an HTTP server

   res.end(`
    
      <h1> ${generatepwd()} </h1>
    
`);



});

server.listen(3001, () => {

    console.log("lishing on http://localhost:3001");
})