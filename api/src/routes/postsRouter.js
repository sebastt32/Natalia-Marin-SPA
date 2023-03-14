const { Router } = require ("express");
const postRouter = Router();
const { createPostHandler } = require ("../handlers/postsHandlers");

postRouter.get("/", createPostHandler);

postRouter.post("/",createPostHandler);

module.exports = postRouter;
