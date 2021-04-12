# flight-app

**Demo** [view live app](https://flight-app-collins.herokuapp.com)

## Setup

```
1. git clone https://github.com/collinsuzebu/flight-app.git
2. cd flight-app
3. npm install
3. $ touch .env
4. add **REACT_APP_API_URL=https://api.spacexdata.com/v3/launches** to the .env file.
5. npm start
```

## Tests

```
npm test -- --watchAll=false
```

## Deploy Heroku

1. heroku create flight-app-collins
2. heroku config:set REACT_APP_API_URL=https://api.spacexdata.com/v3/launches
