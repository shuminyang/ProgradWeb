angular.module('progradWeb').config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'projeto/view/login.html',
      controller: 'loginController'
    })
    .when('/', {
      redirectTo: '/alunos'
    })
    .when('/alunos', {
      templateUrl: 'projeto/view/aluno.html',
      controller: 'alunoController'
    })
    .when('/adicionarAluno', {
      templateUrl: 'projeto/view/criarAluno.html',
      controller: 'alunoController'
    })
    .when('/deletar', {
      templateUrl: 'projeto/view/deletar.html',
      controller: 'alunoController'
    })
    .when('/modificarAluno', {
      templateUrl: 'projeto/view/modificarAluno.html',
      controller: 'alunoController'
    })
});
