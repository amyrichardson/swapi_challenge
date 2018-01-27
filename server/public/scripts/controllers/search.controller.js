swapiApp.controller('SearchController', ['SwapiService', function(SwapiService) {
    console.log('SearchController loaded');
    
    const self = this;
    self.resourceTypes = ['People', 'Films', 'Starships', 'Vehicles', 'Species', 'Planets', ]
    
    self.searchSwapi = function(resourceType, keyword) {
        console.log('searching for: ', resourceType, 'with keyword: ', keyword);
        SwapiService.searchSwapi(resourceType, keyword);
    }
}]);