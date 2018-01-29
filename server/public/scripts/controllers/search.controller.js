swapiApp.controller('SearchController', ['SwapiService', function(SwapiService) {
    console.log('SearchController loaded');
    
    const self = this;
    self.resourceTypes = ['people', 'films', 'starships', 'vehicles', 'species', 'planets'];
    self.searchResults = SwapiService.searchResults; //link to search results from SwapiService
 
    
    self.searchSwapi = function(search) {
        console.log('searching for: ', search);
        SwapiService.searchSwapi(search);
    } //end searchSwapi

    self.clearResults = function(){
        self.searchResults.list = [];
    } //end clearResults
}]);