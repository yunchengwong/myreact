# Introduction to Node.js: Todo App

From cs50 seminar: [Introduction to Node.js: Using Server-Side JavaScript](https://cdn.cs50.net/2022/fall/seminars/node/node_slides.pdf)

## App Setup (React as frontend, Express as backend)

From [Simplest and Fastest React Express App Setup](https://medium.com/@ABiasedHypocrite/simplest-and-fastest-react-express-app-setup-8497ed8db0d1)

create the app with `create-react-app` and `express-generator`:

```
mkdir todo
cd todo
npx create-react-app client
npx express-generator backend --no-view
cd backend
npm install
```

set **backend** default port  to `3001`, prevent conflict with **client** port of `3000`:

(backend/bin/www)

```
var port = normalizePort(process.env.PORT || '3001');
```

**client** get data from **backend** with fetch API

(client/src/App.js)
```
fetch('http://localhost:3001/users')
  .then(response => response.text())
  .then(data => setData(data));
```

error: fetch blocked by CORS policy

solution:

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

install concurrently in todo folder:

```
cd todo
npm install concurrently
```

(todo/package.json)
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
cd todo
npm run start
```