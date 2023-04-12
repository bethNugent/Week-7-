const express = require("express");
const app = express();

//route /books -------- and function we will be using
// app.use("/animals", express.static("Animals"))
// app.use("/about", express.static("about"))
// app.use("/zebras", express.static("zebras"))

app.use(express.json());


//GET REPONSE
app.get("/animals", (request, response) => {
  const animal = {
    type: "cat",
    age: 3,
    likes: "dreamies",
  };

  const successResponse = {
    message: "Response sent successfully",
    animal: animal,
  };
  // response.send("hello from animals route")
  response.send(successResponse);
});


//POST RESPONSE
app.post("/animals", (request, response) => {
  console.log(request.body);

  const newAnimal = {
    id: "1",
    type: request.body.type,
    age: request.body.age,
    likes: request.body.likes,
  };
  const successResponse = {
    message: "Response sent successfully",
    animal: newAnimal,
  };
  response.send("hello from animals route")
  response.send(successSENDResponse);
});


//PUT RESPONSE (update)
app.put("/animals/:id", (request, response) => {
    console.log(request.body)
    return response.json({
        message: "put route", 
    })
})

//maps through the data to see if it exists - if it does it updates it if it doesn't it creates it
// app.put("/animals/:id", (request, response) => {

//   const id = request.params.id;
//   const newAnimal = {
//     id: request.body.id,
//     type: request.body.type,
//     age: request.body.age,
//     likes: request.body.age,
//   };

//   if (animals.find(p => p.id == id) == null) {
//     animals.push(newAnimal);
//   } else {
//     animals = animals.map(a => a.id != id ? a : newAnimal);
//   }

//   response.send({
//     status: "OK",
//     data: newGame
//   });
// });


//DELETE RESPONSE 
// app.delete("/animals/:id", (request, response) => {
//     console.log(request.params)
//     return response.json({
//         message: "delete route",
//     })
// })



app.listen(5001, () => console.log("Server is listening"));
