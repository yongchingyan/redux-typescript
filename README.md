This technical assignment was implemented in one week.

The goal is to create a responsive site without the usage of a design framework library like Bootstrap. 

Due to time constraints the project was created with the create-react-app using the redux-typescript template. 

The mockup of the website is located in `src/asset/assets.json`.

`Lunacy` was used to view the sketch file to extract the assets.

A demonstration video is included in case the project fails to build `./Tech Assessment - Demo Vid.mp4`

## QuickStart

After checking out this repository, please run the following command:

### `npm install`
To download the package dependancies:
### `npm start`
To runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the Jest test:
### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Assignment Requirements

-	HTML/JavaScript 
-	Webpack + webpack-dev-server

        Provided by create-react-app

-	TypeScript
-	SASS/SCSS
        
                Located in `./src/css`

-	ReactJS
-	Redux for State Management

                Location of Store: `.src/app/store.ts`
                Location of Reducers: `.src/features`

-	Consumption of a JSON file to render content

                `.src/asset/assets.json` is used to dynamically generate the game banners in the main content part of the website

-	Creation of 1 frontend unit test case on 1 of your components with Jest and Enzyme 

                `App.test.tsx` tests that the `Display` react component is able to detect 
                the change in display mode (pc => mobile) when the windows width is below 1000px. 

Entry point for the React project => `./src/index.tsx`
