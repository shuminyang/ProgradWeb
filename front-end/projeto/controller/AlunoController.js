"use strict";
angular.module('progradweb').controller('AlunoController', function(alunoService, $scope){  
  $scope.todosAlunos = alunoService.listarAlunos();

  $scope.criarAluno = function (aluno) {
    alunoService.criarAluno(aluno);
  };
});
