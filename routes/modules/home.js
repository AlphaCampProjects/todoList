// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();
// 引用 Todo model
const Todo = require("../../models/todo");

// 設定首頁路由
router.get("/", (req, res) => {
  Todo.find()
    .lean()
    .sort({ name: "desc" })
    .then((todos) => res.render("index", { todos }))
    .catch((error) => console.error(error));
});
module.exports = router;
