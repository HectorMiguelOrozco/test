(function () {
    'use strict';

    angular
        .module('ty-test')
        .factory('PeopleService', PeopleService);

    PeopleService.$inject = ['$http'];
    function PeopleService($http) {
        var service = {
            get: get,
            post: post
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('data/people.json')
                .then(handleData)
                .catch(handleError);
        }

        function post(person){
            return $http
            .post('servidor-remoto/people/create', person)
            .then(handleData)
            .catch(handleError);
        }

        function handleError(e){
            console.log('Error: ', e);
        }

        function handleData(response){
            return response.data;
        }
    }
})();