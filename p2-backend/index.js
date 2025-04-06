// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors");

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

import SignupModel from './Models/Signup.js';
import AuctionModel from './Models/Auction.js';

// const SignupModel = require("./Models/Signup.js");
// const AuctionModel = require("./Models/Auction.js");

app.get('/sayhello', (req, res) => {
  res.send('Hello World to Night Class!');
});

app.post("/signup", async(req, res) => {
     try {
        const Signup1 = await SignupModel.create(req.body);
        res.status(200).json(Signup1);
        console.log(req.body);
     } catch(error) {
        res.sendStatus(500);
     }
});

app.post("/signin", async(req, res) => {
    try{
       const { roll_no, password } = req.body;                         // Extract roll_no and password from the request body

       const user = await SignupModel.findOne({ roll_no});             // Search for a user in the database that matches the provided roll_no  
       if(!user) {                                                     // Check if the user was found 
        return res.status(404).json({ message: "User not found "});    // If no user is found, respond with a 404 status and a message
       }

       if(user.password !== password) {                                      // Compare the provided password with the stored password 
        return res.status(401).json({ message: "Invalid credentials"});      // If the passwords do not match, respond with a 401 status indicating invalid credentials 
       }

       res.status(200).json({ message:"Login successful", user});            // If authentication is successful, respond with a 200 status and a success message along with the user data
    }catch(error) {
        console.error(error);                                                // Log any errors that occur during the process for debugging
        res.sendStatus(500);                                                 // If an error occurs, respond with a 500 status indicating a server error
    }
});

app.post("/addauctiondata", async(req, res) => {
    try {
        const Auction1 = await AuctionModel.create(req.body);
        res.status(200).json(Auction1);
        console.log(req.body);
    } catch(error) {
        res.sendStatus(500);
    }
});

app.get("/getauctiondata", async(req, res) => {
    try{                                                 // Fetch all auction records from the AuctionModel collection  
        const Auction1 = await AuctionModel.find();      // No filter, retrieves all documents
        res.status(200).json(Auction1);                  // Send the retrieved data back in JSON format  
    }catch(error){                                       // Log any errors for debugging  
        res.sendStatus(500);                             // Send a server error response   
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
      .connect("mongodb+srv://edunet:edunet1234@cluster01.jmty8yz.mongodb.net/")
      .then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("MongoDB Not Connected");
});
