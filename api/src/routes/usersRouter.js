const { Router } = require("express");
const {getUserHandler,getUsersHandler,createUserHandler}=require("../handlers/usersHandlers");
const { validate } = require ("../middlewares/validate");
const usersRouter = Router();





usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id",getUserHandler);

usersRouter.post("/", validate, createUserHandler);



module.exports = usersRouter;