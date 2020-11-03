const puppeteer = require('puppeteer');
const mongoose = require('mongoose');


async function connectToDB() {
    await mongoose.connect("mongodb://mongo:27017/CG-test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDb");
  }

connectToDB();