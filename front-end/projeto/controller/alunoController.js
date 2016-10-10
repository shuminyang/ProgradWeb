angular.module('progradWeb').controller('alunoController', function(alunoService, $scope) {

  $scope.listarAlunos = alunoService.listarAlunos();

  $scope.adicionarAluno = function(aluno) {

    if ($scope.mensagemErro !== undefined || $scope.mensagemSucesso !== undefined) {
      $scope.mensagemErro = undefined;
      $scope.mensagemSucesso = undefined;
    }

    alunoService.adicionarAluno(aluno)
      .then(function(data) {
        $scope.mensagemSucesso = "Aluno cadastrado!";
      })
      .catch(function(error) {
        $scope.mensagemErro = "Erro no cadastro!\n" + error.data.errmsg;
      });
  };

  $scope.deletarAluno = function(ra) {    
    alunoService.deletarAluno(ra)
      .then(function(data) {
        console.log(data);
        $scope.mensagemSucesso = "Aluno deletado!";
      })
      .catch(function(error) {
        console.log(error);
        $scope.mensagemErro = "Erro no deletar!\n" + error.data.errmsg;
      });
  }

});
