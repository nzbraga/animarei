const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

require('./src/database')

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(routes)
    
    app.listen(3031)
    console.log("server On 3031")
    