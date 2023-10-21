// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')

// ... more code ...

// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)


const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello world!')
})

app.listen(process.env.PORT)

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor} Page</h1>
        </body>
    `)
})



