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
  },
  {
    "name": "Monica",
    "photo": "https://www.pexels.com/photo/brown-haired-woman-wearing-brown-blazer-focus-photo-712521/",
    "scores": [
      4,
      3,
      2,
      1,
      5,
      1,
      2,
      5,
      3,
      1
    ]
  },
  {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
      4,
      2,
      5,
      1,
      3,
      2,
      2,
      1,
      3,
      2
    ]
  },
  {
    "name": "Ahmed",
    "photo": "https://www.pexels.com/photo/man-young-happy-smiling-91227/",
    "scores": [
      4,
      3,
      2,
      1,
      5,
      1,
      2,
      5,
      3,
      2
    ]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = FriendsArray;
