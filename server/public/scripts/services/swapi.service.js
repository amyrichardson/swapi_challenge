swapiApp.service('SwapiService', ['$http', function($http){
    console.log('SwapiService loaded');
    
    const self = this;
    self.searchSwapi = function (resourceType, keyword){
        console.log('searching swapi in service: ', resourceType, keyword);
        
    }
}]);