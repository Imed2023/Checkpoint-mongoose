import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()
import persons from "./models/person.js";


const uri = process.env.URI
const app=express()



    app.get('/', function(req, res){  res.end('Hello World');  });

    mongoose.connect(uri, {
        dbName:"imed",
    }).then(
        () => {
            
          console.log("Connected To DB");

          app.listen(3000,function(req,res){

            console.log("Server is started on port 3000");
            
            });
        
        })
app.post("/add", (req,res) =>{
    const newPerson = persons({name:"Imed El Ayeb",age:45,favoriteFoods : ["KousKous","Riz"]})
    newPerson.save();
    res.send("Record Added")
 // An array of objects representing the records to be created
const usersToCreate = [
    { name: 'John Doe', age: 25 ,favoriteFoods : ["KousKous","Riz"]},
    { name: 'Jane Smith', age: 30 ,favoriteFoods : ["KousKous","Riz"]},
    { name: 'Bob Johnson', age: 35 ,favoriteFoods : ["KousKous","Riz"]}
  ];
  
  // Create the records using model.create()
  persons.create(usersToCreate)
    .then(createdpersons => {
      console.log('Records created successfully:', createdpersons);
    })
    .catch(error => {
      console.error('Error creating records:', error);
    });  

     

})

// id to search
var id = "64b3b407373f75c1289c9e43"

// make a query with the `findById()` function
const person = await persons.findById(id)

console.log(person)

// find a document with id
let iddel = "64b3b407373f75c1289c9e44"

// find and delete document with the id
let persontodel = await persons.findByIdAndDelete(iddel)

console.log(persontodel)