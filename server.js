const exp = require("express");
const bodyParser = require("body-parser");
const Challenges = require("./model/challengesDB");
const app = exp();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/challengesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  // req es todo lo que el navegador esta enviando.
  // res es todo lo que se le devuelve al navegador.
  console.log(`urlRequerida:${req.url} - métodoRequerido:${req.method}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
  //se incorporan las cabeceras cors en las respuestas de http
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  let resp = null;
  try {
    const challenges = await Challenges.find().sort({
      completed: "desc", //Ordering the list according to the number of challenges
    });
    resp = ({
      status: true,
      data: challenges,
      comments: "Sucessfull operation",
    });
    resp = ({resp:challenges}); 
    
  } catch (err) {
    resp = {
      status: false,
      data: null,
      comments: err,
    };
  }
  res.json(resp);
});

app.get("/:id", async (req, res) => {
  let resp = null;
  try {
    Challenges.findById(req.params.id, function (err, docs) {
      console.log(docs);

      res.json({
        status: true,
        data: docs,
        comments: err,
      });
    });
  } catch (err) {
    resp = {
      status: false,
      data: null,
      comments: err,
    };

    res.json(resp)

  }
});

app.post("/", async function (req, res) {
  let resp = null;

  try {
    console.log(req.body["name"]);

    let challenges = new Challenges();
    challenges.name = req.body["name"];
    challenges.code = req.body["code"];
    challenges.house = req.body["house"];
    challenges.grade = req.body["grade"];
    challenges.password = req.body["password"];
    challenges.completed = req.body["completed"];

    challenges = await challenges.save();
    console.log(challenges);
    resp = {
      status: true,
      data: { id: challenges._id },
      comments: "Success operation",
    };
  } catch (err) {
    resp = {
      status: false,
      data: null,
      comments: err,
    };
    console.log(err);
  }
  res.json(resp);
});

// trying to update

app.put("/:id", async function (req, res) {
  //console.log(req.params.id);
  //console.log(req.body);
  let resp = null;
  try {
    await Challenges.findByIdAndUpdate(
      req.params.id,
      req.body,
      function (err, docs) {
        if (err) {
          console.log(err);
          resp = {
            status: false,
            data: null,
            comments: err,
          };
        } else {
          console.log("Updated User : ", docs);
          resp = {
            status: true,
            data: docs,
            comments: "Success operation at updating user",
          };
        }
      }
    );
  } catch (err) {
    resp = {
      status: false,
      data: null,
      comments: err,
    };
  }
  res.json(resp);
});

app.delete("/", function (req, res) {
  console.log(req.query.id);
  console.log(req.body);
  res.json({
    dataRecieved: req.body,
    status: "ok",
    method: "delete",
  });
});
app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log(`listening by port ${app.get("port")}`);
});