var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }

  var server1 = http.createServer(handleRequest);

  // Start our server so that it can begin listening to client requests.
  server1.listen(PORT1, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });
  
  var server2 = http.createServer(handleRequest);

  // Start our server so that it can begin listening to client requests.
  server2.listen(PORT2, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
    