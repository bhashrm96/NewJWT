const express = require("express")
const routes = express.Router()
const {getAll, postData, loginData} = require("../controller/formcontroller")

routes.get("/", getAll)

routes.post("/register", postData)

routes.post("/login",loginData)

module.exports = routes