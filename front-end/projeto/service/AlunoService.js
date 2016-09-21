angular.module('progradweb').factory('alunoService', function($resource, $http) {

    var listarAlunos = function() {
        return $resource('http://localhost:9090/aluno/').query();
    };

    var criarAluno = function(aluno) {
        $http.post('http://localhost:9090/aluno/', aluno);
    };

    return {
        listarAlunos: listarAlunos,
        criarAluno: criarAluno
    };
});
