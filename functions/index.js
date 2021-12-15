const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JK4AySIdDahZkZ7VDXBxkJ7KOLWbKIftfS24Y0zQWkXz9ZOIPstk21c6iQa2BcZy0BGbT1cT50x6wBURJHN72tQ002HL2EoNn')

//  APi

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.get('/pawan', (request, response) => response.status(200).send('hello pawan'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // submits of the currency
        currency: "usd"
           
    })

//     // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret, 
    })
})

// - Listen command  
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-a7268/us-central1/api