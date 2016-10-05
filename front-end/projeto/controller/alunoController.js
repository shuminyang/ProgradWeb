angular.module('progradWeb').controller('alunoController', function(alunoService, $scope) {
  $scope.mensagem = undefined;

  $scope.listarAlunos = alunoService.listarAlunos();

  $scope.adicionarAluno = function(aluno) {
    console.log(aluno);
    $scope.mensagem = alunoService.adicionarAluno(aluno);
  };

});
