// ===============================================================================
// LOAD DATA
// We are linking our routes to a our "data" source.
// The friends.js (an array of objects) source contains name, photo, and scores 
// of each of the friends
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits survey results to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the (FriendsArray) JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    // Adding the user data to the friends array
    friendsData.push(req.body);

    // Calling the bestMatch function to get array index of best match
    var bestMatchIndex = bestMatch(friendsData);

    // The response is the friend with the best match
    res.json(friendsData[bestMatchIndex]);

  });

  // ---------------------------------------------------------------------------
  // Clear out the table while working with the functionality.

  app.post("/api/clear", function () {
    // Empty out the array of data
    friendsData = [];


    console.log(friendsData);
  });
};

// ---------------------------------------------------------------------------
// Best Match Function
function bestMatch(friendsData) {
  var ansDiffArray = [];

  if (friendsData.length <= 1) {
    // If new friend is the first to be stored
    var minIndex = 0;

    return minIndex;

  } else {
    for (var i = 0; i < friendsData.length - 1; i++) {
      var ansDiff = 0;
      for (var j = 0; j < friendsData.scores.length; j++) {
        // the difference between the new friend and the existing friends for each question
        ansDiff = Math.abs(friendsData[friendsData.length].scores[j] - friendsData[i].scores[j]);
        ansDiff += ansDiff;
      }
      ansDiffArray[i] = ansDiff;
    }

    // Determining the minimum difference between the new friend and the existing friends
    var smallest = ansDiffArray[0];
    for (var i = 0; i < ansDiffArray.length - 1; i++) {
      if (ansDiffArray[i] < smallest) {
        smallest = ansDiffArray[i];
      }
    }

    // Determining the index of the minimum value
    var minIndex = ansDiffArray.indexOf(smallest);

    return minIndex;
  }
}
