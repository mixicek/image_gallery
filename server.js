const express = require("express");
const mongoose = require("mongoose");
//const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mixicek:M1x1c3k1234@cluster0.rbi70.mongodb.net/imageperformance?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
