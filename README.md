# React Movies

Created with effort by : Vy

## View As

https://hoangvy-react-movie.netlify.com/

## The following **required** User Stories are completed:

* [x] The user can see the top 20 "Currently Playing" movies on a page.
* [x] For each movie, the user can see the Movie Title, Year, Rating, and Poster.
* [x] The user can see this information clearly on devices of various screen sizes.
* [x] The user can see "more" movies by tapping a "See More" button at the bottom.


## The following **optional** User Stories are implemented:

* [ ] The user can enter a term into a search box to filter the currently loaded movies by search term. E.g.; the user can type "mar" and the results are reduced to show "Captain Marvel".
* [ ] The user can change the "source" from "Currently Playing" movies to "Top Rated" movies (or any other of the endpoints supplied by MovieDB).
* [ ] Sort by Rating and Popularity (from Lowest to Highest and Vice Versa)
* [ ] Have Year, Rating as a slider. Change the display dynamically when the slider is changed. You could use React Input Range package for this task.

## Rockets:

* [x] Pagination: Replace the "See More" with a page control, with a previous and next Button at the end. Click it will move user to the next 20 (or previous 20) movies. Remember at first load, the Previous       button should be disabled.
* [x] In addition to Previous and Next, use Number Pagination. Click on Number 3 will get them to Page3 and display movies 61st - 79th.
* [ ] Routing: For each movie, include a link (movie/id) to display the full Movie Info on another page (URL). Use React Router for this. You'll also have to figure out how to retrieve the parameters from the URL.

## Time Spent

Time spent: **8** hours spent in total.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## License

    Copyright [2019] [huynh.h.vy@gmail.com]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
