# Star Wars API Challenge

npm install --save angular angular-route angular-material angular-aria angular-animate angular-messages express mongoose body-parser

## Set Up Client-Side
- [x] Index.html - include nav template and main ng-view
- [x] Nav template
- [x] 2 views - Search & Favorites
- [x] 2 controllers - Search & Favorites
- [x] Service - SwapiService (handles requests to Star Wars API)
- [x] Client.js config set up
- [x] Source all files into index.html

## Set Up Server
- [x] Server.js set up
- [ ] Set up route: /favorites

## Base Mode
- [x] Build out search view html: Dropdown w/ type of resources (people, planets, spaceships, etc.), Input field to enter a keyword, Button to submit search, div for results to be displayed on (add favorite button)
- [x] Submit button ng-click, runs search function in search controller
- [x] Search function in controller redirects to the SwapiService
- [x] SwapiService makes http request to SWAPI
- [x] Results of request are given back to the controller
- [x] Display results on DOM
- [ ] Set up database for favorites (schema, model)
- [ ] Favorites button - on click, run function in search view addFavorites
- [ ] Http post to database
- [ ] Http get in favorites controller
- [ ] Display favorites in favorites view
- [ ] Styles