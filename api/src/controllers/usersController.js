const { User, Post }= require("../db");
const axios = require ("axios");

const cleanArray = (arr)=>
   arr.map(elem=>{
    return{
      id:elem.id,
      name:elem.name,
      email:elem.email,
      phone: elem.phone,
      created: false
    };
  });
  


// const createUser = async (name, email, phone) => {
//   const newUser = await User.create({name,email,phone});
//   return newUser;
// };

const createUser = async (name, email, phone) =>
await User.create({ name, email, phone});

  
  
  
  
const getUserById = async (id, source) => {
    const user = source === "api" 
    ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
        .data
    : await User.findByPk(id,
      {include:{
         model: Post,
         attributes:["title","body"],
      }
       
      });
    
    return user;
}; 



const getAllUsers = async () => {
    // buscar en bdd
    const databaseUsers = await User.findAll();
    // buscar en api
    const apiUsersRaw = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
    
   const apiUsers = cleanArray(apiUsersRaw);

    return [...databaseUsers, ...apiUsers];

    
};

const searchUserByName = async (name) => {
 const databaseUsers = await User.findAll({ where : {name} });

 const apiUsersRaw = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
 const apiUsers = cleanArray(apiUsersRaw);
 const filteredApi = apiUsers.filter((user) => user.name === name );

 return [...filteredApi,...databaseUsers];

};
  
  
  module.exports = { createUser, getUserById, getAllUsers, searchUserByName};