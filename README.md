# DIY API!
Your mission is to create an API that makes calls to a database called "ga_mazon". The database should have a books table and an authors table. The tables should have the following schema:

**books**
- title
- genre
- year
- plotSummary
- authorId

**authors**
- name
- birthYear
- country

Think about what data types should go in your tables. Then create the appropriate models in your app, and migrate your models to your database.

General steps
1. Set up your database
2. Create an express server
3. Install CRUD routes one at a time; it's ok to start them off in `server.js`. Remember that you need 5 routes, and that in each one of these, `model` stands for `book`:
  - `GET /models`: gets all models from the db
  - `GET /models/:id`: gets the model with the specified id
  - `POST /models`: creates a new model with the data from the body
  - `PUT /models/:id`: updates the model with the specified id, using the data from the body
  - `DELETE /models/:id`: deletes the model with the specified id
4. Test each route with postman as you write it! 

Stretch
1. Error handling - we will go over the syntax for this on Monday in class
2. Move your route handling functions into a controller, and use a router to match those handlers to route strings&verbs 
3. Add validations to your model. If your validations raise an error, you should catch them in your route handler and send that error message to the client
