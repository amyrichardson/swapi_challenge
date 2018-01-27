swapiApp.service('SwapiService', ['$http', function($http){
    console.log('SwapiService loaded');
    
    const self = this;
    self.searchResults = {list: []};
    self.searchSwapi = function (resourceType, keyword){
        console.log('searching swapi in service: ', resourceType, keyword);
        $http.get(`https://swapi.co/api/${resourceType}/?search=${keyword}`)
            .then(function(response){
                self.searchResults.list = response.data.results;
                console.log('response from swapi: ', self.searchResults.list);
            })
    }
}]);