var listasDinamicas = angular.module("Si1", []); 

listasDinamicas.controller("Controller01", ['$scope', function ($scope) {
    
    
$scope.toLearn = [];
$scope.learnt = [];
$scope.toLearnName = "";
$scope.learntName = "";
    
    

$scope.addtoLearn = function (name) {
        
	$scope.toLearn.push(name);
    
};
    
    

$scope.addLearnt = function (name) {
       
	 $scope.learnt.push(name);
   
};
    


$scope.movetoLearn = function (index) {
        
	$toLearnName = $scope.toLearn[index];
        
	$scope.removetoLearn(index);
        
	$scope.addLearnt($toLearnName);
    

};
    
    

$scope.moveLearnt = function (index) {
        
	$learntName = $scope.learnt[index];
        
	$scope.removeLearnt(index);
       
	$scope.addtoLearn($learntName);
    
	};
    

$scope.removetoLearn = function (index) {
        
	$scope.toLearn.splice(index, 1);
    
};
       

$scope.removeLearnt = function (index) {
        
	$scope.learnt.splice(index, 1);
    

};
    
   

}]);