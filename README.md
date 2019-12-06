# Northcoders News - Front End

Northcoders news is a web-based applications designed to act as a social news hub, largeley based on *Reddit*.The front end allows the users to sign in and interact with both comments and articles. The front end provides the user with an interactive interface with the RESTful api built in the back end section of the app.

#### Deployed Versions

- [Back End](https://nc-news-hf.herokuapp.com/api/users/)
- [Front End](https://nc-news-hf.netlify.com/)

## Getting Started

To run the project locally, follow the below instructions.

Open the terminal and change directory to the location you wish copy the app to.

```terminal
git clone https://github.com/harrypfry/fe-nc-news
```

Change directory to the app and run the below command to install the required dependencies (react v16.12.0, axios v0.19.0 and @reach/router v1.2.1)

```terminal
npm install
```

Run the react app locally with the following command.

```terminal
npm start
```

This will run the app locally at [http://localhost:3000](http://localhost:3000/).

## User Stories

As a user, I am able to

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.
10. use the site on my mobile without sacrificing style or functionality
11. view and update the total score a user has accumulated
12. view a list of all articles written by a specific user

## Build With

- [React](https://reactjs.org/) - Javascript library for building interfaces
- [Reach Router](https://reach.tech/router) - A route manager for the react-app
- [Axios](https://github.com/axios/axios) - A promise based HTTP client for the browser and node.js