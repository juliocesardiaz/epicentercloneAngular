epicenter.factory('EpicenterFactory', function EpicenterFactory() {
	var factory = {};
	factory.students = [
		{name: "Julio Diaz", signed_in: false},
		{name: "Juan Mieses", signed_in: false},
		{name: "Jeremy Wu", signed_in: false},
		{name: "Ana Weller", signed_in: true},
		{name: "Angel Mota", signed_in: false},
		{name: "Brad Mitchell", signed_in: false},
		{name: "Maria Fernanda", signed_in: false},
		{name: "Kate Applebaum", signed_in: false},
	];
	
	factory.signInOut = function(student, value) {
		console.log(student);
		student.signed_in = value;
	}
	return factory;
});