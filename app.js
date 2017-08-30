var app = angular.module('chatApp', ['firebase']);
var txtMessage = document.getElementById('txtMessage');

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        });
        $scope.messageText = ' ';
    }

});

firebase.storage().ref().child('logo.png').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // Or inserted into an <img> element:
  var img = document.getElementById('myimg');
  img.src = url;
}).catch(function(error) {
  // Handle any errors
});

