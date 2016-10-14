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

  var procurarAluno = function(options) {

    if (options.aluno && options.ra) {
      return $http.get('http://localhost:9090/aluno/both/' + options.variavel);
    } else if(options.ra) {
      return $http.get('http://localhost:9090/aluno/findRA/' + options.variavel);
    } else {
      return $http.get('http://localhost:9090/aluno/find/' + options.variavel);
    }

  };

  return {
    listarAlunos : listarAlunos,
    adicionarAluno: adicionarAluno,
    deletarAluno: deletarAluno,
    procurarAluno: procurarAluno
  }
})
