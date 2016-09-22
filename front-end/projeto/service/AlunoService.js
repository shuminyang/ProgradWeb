angular.module('progradweb').factory('alunoService', function($resource, $location, $http) {

    var listarAlunos = function() {
        return $resource('http://localhost:9090/aluno/').query();
    };

    var criarAluno = function(aluno) {
        $http.post('http://localhost:9090/aluno/', aluno).success(function(data) {
          $location.path('/alunos');
        });
    };

    var buscarAluno = function(que) {
      if (que !== undefined) {
        if (que['nome'] !== undefined && que['ra'] !== undefined) {
          return $resource('http://localhost:9090/aluno/find/:nome/:ra', {
            nome: que['nome'],
            ra: que['ra']
          }, {
            query: {
              method: 'GET'
            }
          }).query();

        } else if (que['nome'] !== undefined) {
          return $resource('http://localhost:9090/aluno/findnome/:nome', {
            nome: que['nome']
          }, {
            query: {
              method: 'GET'
            }
          }).query();

        } else if (que['ra'] !== undefined) {
          return $resource('http://localhost:9090/aluno/findra/:ra', {
            ra: que['ra']
          }, {
            query: {
              method: 'GET'
            }
          }).query();
        }
      }

    };
    return {
        listarAlunos: listarAlunos,
        criarAluno: criarAluno,
        buscarAluno: buscarAluno
    };
});
