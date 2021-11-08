const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require("rowdy-logger");
const model = require("./models");

const routesReport = rowdy.begin(app);

app.use(express.json());
//express recognisez this as error message automatically
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.get("/models", async (req, res) => {
  const all = await model.books.findAll();
  console.log(all);
  res.send("Home Page" + all);
});

app.get("/models/:id", async (req, res) => {
  const book = await model.books.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(book);
});

app.post("/models", async (req, res) => {
  const { title, genre, year, plotSummary, authorId } = await req.body;
  await model.books.create({
    title,
    genre,
    year,
    plotSummary,
  });
  console.log(title, genre, year, plotSummary, authorId);
  res.send(title, genre, year, plotSummary, authorId);
});

app.put("/models/:id", async (req, res) => {
  const bookId = await model.books.findOne({
    where: {
      id: req.params.id,
    },
  });
  //   console.log("book id ===>>" + bookId);
  const updateBody = req.body;
  const updateID = await bookId.update(updateBody);
  res.send(updateID);
});

app.delete("/models/:id", async (req, res) => {
  const deleteId = await model.books.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(deleteId);
});

// app.get("/models", async (req, res) => {
//   const all = await model.authors.findAll();
//   console.log(all);
//   res.send("Home Page" + all);
// });

// app.get("/models/:id", async (req, res) => {
//   const book = await model.authors.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.send(book);
// });

// app.post("/models", async (req, res) => {
//   const { name, birthYear, country } = await req.body;
//   await model.authors.create({
//     name,
//     birthYear,
//     country,
//   });
//   console.log(name, birthYear, country);
//   res.send(name, birthYear, country);
// });

// app.put("/models/:id", async (req, res) => {
//   const bookId = await model.authors.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   //   console.log("book id ===>>" + bookId);
//   const updateBody = req.body;
//   const updateID = await bookId.update(updateBody);
//   res.send(updateID);
// });

// app.delete("/models/:id", async (req, res) => {
//   const deleteId = await model.authors.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.send(deleteId);
// });

app.listen(PORT, () => {
  console.log(`Listenin on port ${PORT}...`);
  routesReport.print();
});
