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
        if (que['nome'] !== undefined && que['ra'] !== undefined && que['nome'] !== '' && que['ra'] !== '') {
          return $resource('http://localhost:9090/aluno/find/:nome/:ra', {
            nome: que['nome'],
            ra: que['ra']
          }, {
            query: {
              method: 'GET'
            }
          }).query();

        } else if (que['nome'] !== undefined && que['nome'] !== '') {
          return $resource('http://localhost:9090/aluno/findnome/:nome', {
            nome: que['nome']
          }, {
            query: {
              method: 'GET'
            }
          }).query();

        } else if (que['ra'] !== undefined && que['ra'] !== '') {
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

    var atualizarAluno = function(aluno) {
      $http({
        method: 'PUT',
        url: 'http://localhost:9090/aluno/update/:ra',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      }
      }, aluno, {
        params: {
          ra: aluno['ra']
        }
      }).success(function(data) {
        $location.path('/alunos');
      });
      // return  $resource('http://localhost:9090/aluno/update/:ra',{
      //   ra: aluno['ra']
      // }, {
      //   update: {
      //     method: 'POST'
      //   }
      // });
    };

    return {
        listarAlunos: listarAlunos,
        criarAluno: criarAluno,
        buscarAluno: buscarAluno,
        atualizarAluno: atualizarAluno
    };
});
