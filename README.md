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
***
```GET localhost:3002/users``` 		=> [{users}] ```admin```

```GET localhost:3002/users/id``` 		=> {user}

```Patch localhost:3002/users/id```		=> {user} if user in token || ```admin```

```DELETE localhost:3002/users/id``` if user in token || ```admin```

