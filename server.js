const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { loginController } = require("./controllers/");
const auth = require("./services/auth")
const express_graphql = require('express-graphql');
const Schema = require('./graphql');


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", loginController())

app.use('/graphql',
    auth,
    express_graphql({ schema: Schema, pretty: true, graphiql: false }))

app.use('/graphql1',
    // auth,
    express_graphql({ schema: Schema, pretty: true, graphiql: true }))



app.listen(3001, () => {
    console.log("Servidor está na porta 3001!");
})