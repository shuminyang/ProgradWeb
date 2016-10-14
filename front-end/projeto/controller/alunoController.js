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
        $scope.mensagemSucesso = "Aluno deletado!";
      })
      .catch(function(error) {
        $scope.mensagemErro = "Erro no deletar!\n" + error.data.errmsg;
      });
  };

  $scope.encontrarAluno = function(info) {
    $scope.alunoEncontrado = undefined;
    var opcao = {
      "variavel": "",
      "aluno": false,
      "ra": false
    };
    if (info.ra !== undefined || info.nome !== undefined) {
      if (info.ra === undefined) {
        opcao.variavel = info.nome;
        opcao.aluno = true;
        alunoService.procurarAluno(opcao)
          .then(function(data) {
            if (data.data === null) {
              console.log("erro! Aluno não encontrado");
            } else {
              $scope.alunoEncontrado = data.data;
            }
          })
          .catch(function(error) {
            console.log("Erro pesado NOME!");
          });
      } else if(info.nome === undefined) {
        opcao.variavel = info.ra;
        opcao.ra = true;
        alunoService.procurarAluno(opcao)
          .then(function(data) {
            if (data.data === null) {
              console.log("erro! Aluno não encontrado");
            } else {
              $scope.alunoEncontrado = data.data;
            }
          })
          .catch(function(error) {
            console.log("Erro pesado RA!");
          })
      } else {
        opcao.variavel = info.ra + "/" + info.nome;
        opcao.ra = true;
        opcao.aluno = true;
        alunoService.procurarAluno(opcao)
          .then(function(data) {
            if (data.data === null) {
              console.log("erro! Aluno não encontrado");
            } else {
              $scope.alunoEncontrado = data.data;
              console.log(data.data);
            }
          })
          .catch(function(error) {
            console.log("Erro pesado RA/NOME!");
          })
      }
    } else {
      console.log('error');
    }
  };

});
