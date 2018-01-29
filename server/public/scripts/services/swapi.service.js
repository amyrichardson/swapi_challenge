swapiApp.service('SwapiService', ['$http', function($http){
    console.log('SwapiService loaded');
    
    const self = this;
    self.searchResults = {list: []};


    self.searchSwapi = function (search){
        console.log('searching swapi in service: ', search);

        //define base of url
        const urlBase = 'https://swapi.co/api'

        //search params
        const config = {
            params: { search: search.keyword }
        };

        //base url + chosen resource
        let searchUrl = `${urlBase}/${search.resource}/`;
        console.log('searchUrl: ', searchUrl);
        

        //get the results
        $http.get(searchUrl, config)
            .then(function(response){
                self.searchResults.list = response.data.results;
                console.log('response from swapi: ', self.searchResults.list);
            }) //end then
            .catch(function(response){
                console.log('error from swapi: ', response);
            }) //end catch
    } //end searchSwapi
}]);