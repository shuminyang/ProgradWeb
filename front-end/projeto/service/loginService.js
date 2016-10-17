angular.module('progradWeb').factory('loginService', function($resource, $http) {

  var fazerLogin = function() {

  };

  var criarLogin = function(login) {
    return $http.post('http://localhost:9090/login/', login);
  };

  return {
    fazerLogin: fazerLogin,
    criarLogin: criarLogin
  }

});
