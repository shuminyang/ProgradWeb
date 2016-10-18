angular.module('progradWeb').config(function($routeProvider) {

  var authResolve = {
    "auth": function($rootScope, $location) {
      if ($rootScope.usuario === null || $rootScope.usuario === undefined) {
        $location.path('/login');
      } else {
        return true;
      }
    }
  };

  $routeProvider
    .when('/login', {
      templateUrl: 'projeto/view/login.html',
      controller: 'loginController'
    })
    .when('/', {
      redirectTo: '/login'
    })
    .when('/alunos', {
      resolve: authResolve,
      templateUrl: 'projeto/view/aluno.html',
      controller: 'alunoController'
    })
    .when('/adicionarAluno', {
      resolve: authResolve,
      templateUrl: 'projeto/view/criarAluno.html',
      controller: 'alunoController'
    })
    .when('/deletar', {
      resolve: authResolve,
      templateUrl: 'projeto/view/deletar.html',
      controller: 'alunoController'
    })
    .when('/modificarAluno', {
      resolve: authResolve,
      templateUrl: 'projeto/view/modificarAluno.html',
      controller: 'alunoController'
    })
});
