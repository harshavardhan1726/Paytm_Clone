const express = require('express')
const userRoute = require('./user')


const router = express.Router()

router.get('/user', userRoute )


module.exports = router
// /api/v1/user
// /api/v1/transactions ...