angular.module('progradWeb').config(function($routeProvider) {
  $routeProvider
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
});
