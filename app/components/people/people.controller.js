(function () {
    'use strict';

    angular
        .module('ty-test')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$scope', '$mdDialog', 'PeopleService'];
    function PeopleController($scope, $mdDialog, PeopleService) {
        var vm = this;
        vm.people = [];
        vm.person = { name: '', age: null, face: '' };

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
                console.log(person);
                vm.people.push(person);
                console.log('Creó una persona! ');
                vm.closeModal();
        }

        function showModal() {
            $mdDialog.show({
                templateUrl: 'components/people/people.modal.html',
                preserveScope: true,
                scope: $scope
            });

                vm.person.name = "";
                vm.person.age = "";
                vm.person.face = "";
        }
    }
})();