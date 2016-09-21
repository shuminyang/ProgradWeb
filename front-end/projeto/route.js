"use strict";
angular.module('progradweb').config(($routeProvider) => {
  $routeProvider
    .when('/clientes', {
      templateUrl: 'view/AlunosLista.html',
      controller: 'AlunoController'
    })
    .when('/adicionarCliente', {
      templateUrl: 'view/AdicionarAluno.html',
      controller: 'AlunoController'
    })
});
