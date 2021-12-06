const express = require("express");
const router = express.Router();

// const FeController = require("../controller");

const UserController = require("../controller/user.js");
const ListController = require("../controller/lists");

// http://localhost:4200/api/
// router.get("/", FeController.getObject);
// router.post("/", FeController.addObject);
// router.delete("/", FeController.deleteObject);

// USER
router.post("/user/signup", UserController.signUser);
router.post("/user/login", UserController.login);
router.get("/user/profile/", UserController.getProfile);
router.delete("/user/profile", UserController.deleteProfile);

//LISTS
// for both add and update
router.post("/list/add-new", ListController.addNewList);
router.post("/list/getall-list", ListController.getAllLists);
router.get("/list.get-a-list", ListController.getList);
router.post("/list/updatelist", ListController.updateList);
router.delete("/list/delete-a-list", ListController.deleteList);

module.exports = router;



