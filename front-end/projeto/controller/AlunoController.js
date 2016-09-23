"use strict";
angular.module('progradweb').controller('AlunoController', function(alunoService, $scope){

  $scope.todosAlunos = alunoService.listarAlunos();

  $scope.criarAluno = function (aluno) {
    alunoService.criarAluno(aluno);
  };

  $scope.buscarAluno = function(que) {
    $scope.aluno = alunoService.buscarAluno(que);
    console.log($scope.aluno);
    if ($scope.aluno !== undefined) {
      console.log(1);
      $scope.hideAluno = true;
      $scope.searchAluno = false;
    } else {
      console.log(2);
      $scope.hideAluno = false;
    }
    return $scope.aluno;
  };

  $scope.atualizarAluno = function(aluno) {
    alunoService.atualizarAluno(aluno);
  }

});
