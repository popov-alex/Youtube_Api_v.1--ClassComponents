# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Scaffolding the project

This app replicates the youtube in some respect and uses youtube api.

This app is split up into separate components, both class- and funtion-based. As you have probably, noticed this project is marked as 'v.1'. 'v.2' of this project is fully refactored with function-based components and deployed to production.

First of all, we have a search bar component (SearchBar.js) display at the very top of the screen. The search bar is going to show some text input.

A user can type in there that's going to update a state. And then any time the user hits the enter key, that will trigger a form submit event and send that search term back up to the parent component (App.js), which will then take that search term and do an actual API request.

Now on the right hand side of the screen, we have a video list that's going to render the entire list of videos (SearchResults.js component).

And then each of those individual parts of this list I refer to as a video item (SearchItem.js component).

So a video item is one particular video. All the video items are going to be contained by the video list.

And then finally, we have the video detail (VideoDetail.js), which we'll be responsible for actually showing a video player that can play the actual YouTube video that has been fetched and the title and description right underneath that.

So, the component hierarchy should look like this.

At the top, we have that overarching App component, which is responsible for
holding all the state of our application, for retrieving a list of videos and for storing whatever the current search term is.

The App is then going to configure the search bar, video detail and video lists by passing props from the app down to each of those. And in turn, the video list will pass some props down to the video item or the collection of videos items that we have in order to properly display each of those separate videos.

Happy hacking!
