var firebaseConfig = {
    apiKey: "AIzaSyDCOMbLyIh-vr2Y-RmRNuhRH_pHHgdXXxg",
    authDomain: "maxshopping-f5f44.firebaseapp.com",
    databaseURL: "https://maxshopping-f5f44.firebaseio.com",
    projectId: "maxshopping-f5f44",
    storageBucket: "maxshopping-f5f44.appspot.com",
    messagingSenderId: "432806156248",
    appId: "1:432806156248:web:ec120de48a1e7efa0304ad",
    measurementId: "G-XPS7S6QHQH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 var database = firebase.database();

angular.module('starter.controllers', [])


.controller("registroCtrl",function($scope){
	$scope.obtener = function(user){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function a(y){
			swal("se añadio correctamente")
			firebase.database().ref("/usuario").set({
				correo: user.email
			});
      firebase.auth().signOut().then(function(){
        //Sign-out successful.
      }).catch(function(error){
        //An error Happened.
      });
		}).catch(function(error) {

		});
	}
})

.controller("loginCtrl",function($scope){
  
})

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
