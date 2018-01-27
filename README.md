# Star Wars API Challenge

npm install --save angular angular-route angular-material angular-aria angular-animate angular-messages express mongoose body-parser

## Set Up Client-Side
- [ ] Index.html - include nav template and main ng-view
- [ ] Nav template
- [ ] 2 views - Search & Favorites
- [ ] 2 controllers - Search & Favorites
- [ ] Service - SwapiService (handles requests to Star Wars API)
- [ ] Client.js config set up
- [ ] Source all files into index.html

## Set Up Server
- [ ] Server.js set up
- [ ] Set up route: /favorites

## Base Mode
- [ ] Build out search view html: Dropdown w/ type of resources (people, planets, spaceships, etc.), Input field to enter a keyword, Button to submit search, div for results to be displayed on (add favorite button)
- [ ] Submit button ng-click, runs search function in search controller
- [ ] Search function in controller redirects to the SwapiService
- [ ] SwapiService makes http request to SWAPI
- [ ] Results of request are given back to the controller
- [ ] Display results on DOM
