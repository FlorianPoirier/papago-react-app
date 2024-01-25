# Papago API React App

This react project uses Naver Papago API to translate in/from Korean to a target language (eg. French, English).

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to run proxy server

In order to make API call, we must start a proxy server acting as a middleware.

### `node src/proxy-server.js`

## How to use

Write your text in the input field and select the source and target language you want your text to be translated to.
Then click on Translate button. The result will be printed.

The Papago API does not allow all language combination for translation, for example you can not translate from French to Spanish.