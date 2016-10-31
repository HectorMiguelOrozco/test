(function() {
'use strict';

    angular
        .module('ty-test')
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            console.log('Inicio de la app');
        }
    }
})();