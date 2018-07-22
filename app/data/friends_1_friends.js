// ===============================================================================
// DATA
// Below data will hold all of the friends information.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var FriendsArray = [
  {
    "name": "Emma",
    "photo": "https://www.pexels.com/photo/women-s-white-and-black-button-up-collared-shirt-774909/",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = FriendsArray;
