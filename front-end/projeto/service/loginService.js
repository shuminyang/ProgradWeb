angular.module('progradWeb').factory('loginService', function($http) {

  var autenticarLogin = function(login) {
    return $http.post('http://localhost:9090/login/auth', login);
  };

  var criarLogin = function(login) {
    return $http.post('http://localhost:9090/login/', login);
  };

  return {
    autenticarLogin: autenticarLogin,
    criarLogin: criarLogin
  }

});
