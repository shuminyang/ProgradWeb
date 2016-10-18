angular.module('progradWeb').controller('loginController', function(loginService, $scope, $location, $rootScope) {
  $scope.criarLogin = function(login) {

    if ($scope.mensagemErro !== undefined || $scope.mensagemSucesso !== undefined) {
      $scope.mensagemErro = undefined;
      $scope.mensagemSucesso = undefined;
    }

    loginService.criarLogin(login)
      .then(function(data) {
        $scope.mensagemSucesso = 'Login criado com sucesso!!';
      })
      .catch(function(err) {
        $scope.mensagemErro = 'Erro ao criar login!';
      })
  };

  $scope.autenticarLogin = function(login) {

    if ($scope.mensagemErro !== undefined || $scope.mensagemSucesso !== undefined) {
      $scope.mensagemErro = undefined;
      $scope.mensagemSucesso = undefined;
    }

    loginService.autenticarLogin(login)
      .then(function(data) {
        if (data.data !== null && data.data !== undefined) {
          $rootScope.usuario = data.data;          
        } else {
          $scope.mensagemErro = 'Login invalido!';
        }
      })
      .catch(function(err) {
        console.log('Erro pesado! autenticarLogin');
      })
  };

});
