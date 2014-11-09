(function(){
	var gem = { name: 'Azurite', price: 2.85 };
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

})();