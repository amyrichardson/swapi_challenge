swapiApp.controller('SearchController', ['SwapiService', function(SwapiService) {
    console.log('SearchController loaded');
    
    const self = this;
    self.resourceTypes = ['people', 'films', 'starships', 'vehicles', 'species', 'planets'];
    self.searchResults = SwapiService.searchResults; //link to search results from SwapiService
 
    
    self.searchSwapi = function(resourceType, keyword) {
        console.log('searching for: ', resourceType, 'with keyword: ', keyword);
        SwapiService.searchSwapi(resourceType, keyword);
    }   
}]);