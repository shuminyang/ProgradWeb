angular.module('progradWeb').factory('alunoService', function($resource, $http) {
  var listarAlunos = function() {
    return $resource('http://localhost:9090/aluno').query();
  };

  var adicionarAluno = function(aluno) {
    $http.post('http://localhost:9090/aluno', aluno).then(function(data) {
      return "Sucesso";
    }).catch(function(error) {      
      return "Error";
    });
  }

  return {
    listarAlunos : listarAlunos,
    adicionarAluno: adicionarAluno
  }
})
