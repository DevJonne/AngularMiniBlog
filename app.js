angular.module('blog', [])
.controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens/')
    .then(function(response) {
      $scope.publicacoes = response.data;
      $scope.index = function(index) {
        localStorage.setItem("index", index);
      };
    }, function(error) {
      console.error("Erro ao carregar postagens:", error);
    });
});

angular.module('blogMax', [])
.controller('RestMax', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens/')
    .then(function(response) {
      const index = localStorage.getItem("index");
      $scope.publicacoes = response.data[index];
    }, function(error) {
      console.error("Erro ao carregar postagem:", error);
    });
});
