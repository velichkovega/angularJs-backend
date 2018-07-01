var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
    $http.get('http://localhost:3001/books')
        .success(function(result) {
            $scope.books = result;
            console.log('suc ', result);
        })
        .error(function(result) {
            console.log('error ', result);
        });
    
    $scope.addBook = function(book) {
        console.log(book);
        $http.post('http://localhost:3001/books', book)
            .success(function(result) {
                console.log('success', result);
                $scope.books.push(book);
                $scope.book = null;
            })
            .error(function(result) {
                console.log('error', result)
            })
    }
});