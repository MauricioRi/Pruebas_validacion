const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const routeWebManager = require('./routes/webManager')


const app = express()

const allowedOrigins = ['http://localhost:3000']
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true)
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.'
            return callback(new Error(msg), false)
        }
        return callback(null, true)
    }
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/webManager', routeWebManager)


app.listen(process.env.PORT || 3001, () => {
    console.log("El servidor está inicializado en el puerto 3001")
})