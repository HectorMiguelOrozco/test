(function () {
    'use strict';

    angular
        .module('ty-test')
        .directive('tyPeople', tyPeople);

    tyPeople.$inject = [];
    function tyPeople() {
        // Usage:
        // <ty-people></ty-people>
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'PeopleController',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: 'components/people/people.template.html'
        };
        return directive;

        function link(scope, element, attrs) { }
    }
})();