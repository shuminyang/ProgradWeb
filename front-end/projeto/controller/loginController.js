angular.module('progradWeb').controller('loginController', function(loginService, $scope) {
  $scope.criarLogin = function(login) {
    loginService.criarLogin(login)
      .then(function(data) {
        console.log('foi');
        console.log(data);
      })
      .catch(function(err) {
        console.log('nao foi');
        console.log(err);
      })
  };

});
