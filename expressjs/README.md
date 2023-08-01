# ExpressJS

From [Simplest and Fastest React Express App Setup](https://medium.com/@ABiasedHypocrite/simplest-and-fastest-react-express-app-setup-8497ed8db0d1)

## create the app 

with `create-react-app` and `express-generator`:

```
mkdir expressjs
cd expressjs
npx create-react-app client
npx express-generator backend
cd backend
npm install
```

#### backend config

set **backend** default port  to `3001`, prevent conflict with **client** port of `3000`:

(backend/bin/www)

```
var port = normalizePort(process.env.PORT || '3001');
```

#### client config (CORS error)

**client** get data from **backend** with JS `fetch` API

(client/src/App.js)
```
fetch('http://localhost:3001/users')
  .then(response => response.text())
  .then(data => setData(data));
```

**error**: 

`fetch` blocked by CORS policy

**solution**:

(client/package.json)
```
{
    ...,
    "proxy": "http://localhost:3001"
}
```

(client/src/App.js)

```
fetch('/users')
  .then(response => response.text())
  .then(data => setData(data));
```

## Running Locally and Concurrently

#### without concurrently package:

in VS Code terminal:
```
cd backend
yarn start
```

create a new terminal:
```
cd client
npm run start
```

#### with concurrently package:

```
cd expressjs
npm install concurrently
```

(expressjs/package.json)
```
{
  ...,
  "scripts": {
    "start": "concurrently \"cd backend && npm run start\" \"cd client && yarn start\""
  }
}
```

in VS Code terminal:
```
cd expressjs
npm run start
```