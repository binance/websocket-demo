## Readme

This web app is developed to simplify the binance websocket stream testing process. By utilizing the interface, the user can check on multiple streams at a time without knowing the parameters. Since this app is designed for testing purpose instead of the real subscription tool, **_all the subscribed streams will be unsubscribed in 3 sec._**

The left hand side of the screen has 2 parts. The upper is for user stream subscription. The user can select one of the user streams to subscribe. The listen key will be automatically generated based on the api key. The lower is the market stream selection area. The user can only select the streams under the same data source. That is, once the user select a spot market stream, to select from other source, such as coin-m futures stream, is not allowed.

**Note: Some of the symbols are only available in PRODUCTION.**

### Websocket reference

- [Binance API doc](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

- [Current Deployed Page](https://binance-exchange.github.io/websocket-demo)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test` [TODO]

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn pretty-quick`

Runs the code formatter. This command is also hooked with the pre-commit.

#### `yarn storybook`

Runs the storybook for component overview.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

#### `yarn build-storybook`

Builds Storybook as a static web application.
