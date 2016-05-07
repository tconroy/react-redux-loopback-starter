# loopback-redux-react-boilerplate

A boilerplate for a Redux-React application using LoopBack

### Get Started
- **Clone this repository or use npm**
```bash
$ git clone https://github.com/tngan/loopback-redux-react-boilerplate.git
```
```bash
$ npm install loopback-redux-react-boilerplate
```

- **Install dependencies specified in package.json**
```bash
$ npm install
```

- **Start the server (default port is set to 3000)**
```bash
$ npm start
```

### Scripts
- **npm run deploy**: Bundles the application into `.build/dist`.

- **npm run start_prod**: Starts production server, make sure you have already deployed the application.

- **npm run clean**: Removes the bundled files.

### Built-in example
A simple 'Hello World' Redux-React application is included in this boilerplate. You can find those files under `/client`.

Hot reloading is only applied in development mode. In production mode, the code base is pre-compiled and placed under `.build/dist`.

### License

[MIT](LICENSE)

### Copyright

Copyright (C) 2015 Tony Ngan, released under the MIT License.