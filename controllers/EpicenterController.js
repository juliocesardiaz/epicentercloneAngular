epicenter.controller('EpicenterCtrl', function EpicenterCtrl($scope, EpicenterFactory) {
	$scope.students = EpicenterFactory.students;
	$scope.EpicenterFactory = EpicenterFactory;
});