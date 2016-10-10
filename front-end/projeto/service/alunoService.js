angular.module('progradWeb').factory('alunoService', function($resource, $http) {
  var listarAlunos = function() {
    return $resource('http://localhost:9090/aluno').query();
  };

  var adicionarAluno = function(aluno) {
    return $http.post('http://localhost:9090/aluno', aluno);
  };

  var deletarAluno = function(ra) {
    return $http.delete('http://localhost:9090/aluno/delete/' + ra);
  };

  return {
    listarAlunos : listarAlunos,
    adicionarAluno: adicionarAluno,
    deletarAluno: deletarAluno
  }
})
