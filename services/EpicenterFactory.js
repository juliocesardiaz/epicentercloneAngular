epicenter.factory('EpicenterFactory', function EpicenterFactory() {
	var factory = {};
	factory.students = [
		{name: "Julio Diaz", signed_in: false},
		{name: "Juan Mieses", signed_in: false},
		{name: "Jeremy Wu", signed_in: false},
		{name: "Angel Mota", signed_in: false},
	];
	return factory;
});