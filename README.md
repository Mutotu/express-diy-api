# DIY API!
Your mission is to recreate the API that you interacted with for your Unit 1 group project!

General steps
1. Set up your database
2. Create an express server
3. Install CRUD routes one at a time; it's ok to start them off in `server.js`. Remember that you need 5 routes, and that in each one of these, `model` stands for either `book` or `wine`:
  - `GET /models`: gets all models from the db
  - `GET /models/:id`: gets the model with the specified id
  - `POST /models`: creates a new model with the data from the body
  - `PUT /models/:id`: updates the model with the specified id, using the data from the body
  - `DELETE /models/:id`: deletes the model with the specified id
4. Test each route with postman as you write it! Don't forget error handling!

Stretch
1. Move your route handling functions into a controller, and use a router to match those handlers to route strings&verbs 
2. Add validations to your model. If your validations raise an error, you should catch them in your route handler and send that error message to the client
3. Actually connect your API to your group 1 project frontend! In the frontend, change your `fetch` base urls to `http://localhost:<your-port-number>` (but keep the paths the same!). You'll also have to tell your express app to allow requests from your frontend:
  - `npm install cors`
  - `const cors = require('cors')`
  - Before all your routes, `app.use(cors())`
