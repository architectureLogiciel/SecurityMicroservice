## Running the app

To run the database 
```
$ docker-compose up
```

To run server on port 3002 development on watch mode
```
$ npm run start:dev
```

If you're using the application for the first time, you've got to seed the database
```
$ npm run seed:db
```

## APIs

```POST localhost:3002/auth/login``` 	=> token

```POST localhost:3002/auth/register``` 	=> {new user without pwd}


