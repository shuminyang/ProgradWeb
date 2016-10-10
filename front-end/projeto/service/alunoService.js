angular.module('progradWeb').factory('alunoService', function($resource, $http) {
  var listarAlunos = function() {
    return $resource('http://localhost:9090/aluno').query();
  };

  var adicionarAluno = function(aluno) {
    return $http.post('http://localhost:9090/aluno', aluno);
  };

  return {
    listarAlunos : listarAlunos,
    adicionarAluno: adicionarAluno
  }
})
