"use strict";
angular.module('progradweb').config(($routeProvider) => {
  $routeProvider
    .when('/', {
      redirectTo: '/alunos'
    })
    .when('/alunos', {
      templateUrl: 'view/AlunosLista.html',
      controller: 'AlunoController'
    })
    .when('/adicionarAluno', {
      templateUrl: 'view/AdicionarAluno.html',
      controller: 'AlunoController'
    })
    .when('/modificarAluno', {
      templateUrl:'view/ModificarAluno.html',
      controller: 'AlunoController'
    })
});
