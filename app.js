// 載入 express 並建構應用程式伺服器
const express = require("express");

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const routes = require("./routes");
require("./config/mongoose");

const app = express();
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }));

// 設定每一筆請求都會透過 methodOverride 進行前置處理

app.use(methodOverride("_method"));

//template
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(routes);

// 設定 port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
