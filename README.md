# GraphQL and MongoDB boilerplate

1. Run the mongo script to populate data in the database (MongoDB will take care creating the db and the collection). Note: the database should be running on your local machine. Otherwise, make changes to config/mongodb.js

``` node config/loadData.js ```

2. Run the GraphQL server

``` nodemon ```

3. Go to [http://localhost:3000/graphql](http://localhost:3000/graphql). That is the graphical representation of GraphQL.

4. Type in the query

```
{
  user(userId: 1) {
    username
    rating
  }
}
```
