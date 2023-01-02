const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51MJ4o6F5bVZ863zIsYhyiN0zUoaGJDXVd2c3uBPUMS2MjbKcfZ24mx7AhRbQcd5S77LKmI5XuYJZPfyrYnaH8DyR00BDmtJiys"
);
//**start the app first */
const app = express();
// ========== Middlewares
app.use(cors({origin: true}));
app.use(express.json());
app.get('/',(request,response) =>response.status(200).send('hello please work'));
app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("payment Request Recieved for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subumit of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command 
exports.api = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// ing npm install --save firebase-functions@latest
// APi(baseurl)===>http://127.0.0.1:5001/clone-3db42/us-central1/api