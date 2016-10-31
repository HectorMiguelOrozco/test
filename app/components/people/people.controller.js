(function () {
    'use strict';

    angular
        .module('ty-test')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$scope', '$mdDialog', 'PeopleService'];
    function PeopleController($scope, $mdDialog, PeopleService) {
        var vm = this;
        vm.people = [];
        vm.person = { name: '', age: null };

        vm.postPeople = postPeople;
        vm.showModal = showModal;
        vm.closeModal = $mdDialog.hide;

        activate();

        ////////////////

        function activate() {
            getPeople();
        }

        function getPeople() {
            return PeopleService.get().then(function (people) {
                vm.people = people;
            });
        }

        function postPeople(person) {
            PeopleService.post(person).then(function (data) {
                vm.person = { name: '', age: null };
                console.log('Creó una persona! ', data);
            });
        }

        function showModal() {
            $mdDialog.show({
                templateUrl: 'components/people/people.modal.html',
                preserveScope: true,
                scope: $scope
            });
        }
    }
})();