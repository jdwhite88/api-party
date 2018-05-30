# API Party

A website that demonstrates interactions between a client-side application and various APIs.

This is the 4th project for XTern Bootcamp, Session 1.

## Setup
0. Enable JavaScript in your web browser, if you haven't already.
1. Visit https://jdwhite88.github.io/api-party/ in your favorite internet browser that supports ES6 (not IE or Opera).

## TODO
#### Future Ideas
* Add more options to search with Spotify
* Check and handle API request errors nicely
* Customize website's style

#### Known Bugs
* __Routing strips the "api-party" segment from the URL when accessed via GitHub Pages, breaking most of the functionality. In the meantime, host the webpage via localhost.__
* NASA API is implemented using a Demo Key, which is now rate-limited (HTTP error 429). Use an API Key specific to the project instead

## Author
* **Jacob White** - [GitHub](https://github.com/jdwhite88)

## Dependencies
* [React.js 16.3.2](https://reactjs.org/) - JavaScript framework for building the website
* [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - For navigating between URLs on the page
* [GitHub API](https://developer.github.com/v3/) - For displaying select information about a requested GitHub user
* [NASA API](https://api.nasa.gov/) - For displaying select details about NASA's Mars Rovers
* [Spotify API](https://beta.developer.spotify.com/documentation/web-api/) - For searching and embedding a requested song on Spotify

## Acknowledgments
* [TechPoint](https://techpoint.org/) - For hosting the [XTern Bootcamp](https://techpoint.org/xtern-bootcamp/), where this project was completed: [Source code](https://github.com/xtbc18s1/api-party/tree/afternoon) for in-class demo.
* [Fretless](http://www.fretless.com/) - Especially Davey & Dana, for providing instruction for Xtern Bootcamp. 