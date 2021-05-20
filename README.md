## Websocket Demo [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![img](https://imgur.com/LzSD4nG.png[/img] 'init screen')

This web app is developed to simplify the binance websocket stream testing process. By utilizing the interface, the user can check on multiple streams at a time without knowing the parameters. Since this app is designed for testing purpose instead of the real subscription tool, **_all the subscribed streams will be unsubscribed in 5 sec._**

The left hand side of the screen has 2 parts. The upper is for user stream subscription. The user can select one of the user streams to subscribe given the valid listen key generated based on the api key. The lower is the market stream selection area. The user can only select the streams under the same data source. That is, once the user select a spot market stream, to select from other source, such as coin-m futures stream, is not allowed.

**Note: Some of the symbols are only available in PRODUCTION.**

## Demo Site

- [Current Deployed Page](https://binance-exchange.github.io/websocket-demo)

## Usage

### Initialize Your Local Environment

1. Download the repo

2. Turn on the terminal and execute the following commands

   ```
   $ cd <your project directory>
   $ yarn install
   $ yarn start
   ```

3. Open your browser and access `localhost:3000`

### Subscribe the User Data Stream

![img](https://i.imgur.com/pMo5t3P.png[/img] 'user data stream')

1. Use RESTful API to generate the listen key and paste the key to the "Listen key" input box. (If you don't know how to generate the key, please check the API document in "Reference" section below.)
2. Select the data source from the drop-down list
3. Click the corresponding subscribe button.

### Subscribe Market Streams

![img](https://i.imgur.com/dTiRzVh.png[/img] 'market streams')

1. Select the data source from the market stream section
2. Select the stream(s) to subscribe from the drop-down list. If there is any parameter has to be settled, a modal with drop-down list(s) will show up.
3. Click the testnet or production subscribe button.

## Available Scripts

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

## Reference

- [Binance API doc](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)
