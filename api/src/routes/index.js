const { Router } = require ("express");
const usersRouter = require ("./usersRouter");
const postRouter = require ("./postsRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);

mainRouter.use("/posts", postRouter); 




module.exports = mainRouter;


// app.get("/",(req, res)=>{
//     res.status(200).send("NIY:Hola soy el end point");
// });

// app.get("/users",(req,res)=>{
//     res.status(200).send("NIY:Hola estas en los usuarios");
// });

// app.get("/users/:id",(req,res)=>{
//     res.status(200).send("Detalles del usuario");
// });

// app.post("/users",(req,res)=>{
//     res.status(200).send("Estoy creando un usuario")
// });

// app.get("/posts",(req,res)=>{
//     res.status(200).send("Estoy en posts");
// });

// app.get("/posts/:id",(req,res)=>{
//     res.status(200).send("Detalles del post");
// });
