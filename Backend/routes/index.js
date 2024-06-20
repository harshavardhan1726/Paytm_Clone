const express = require('express')
const userRoute = require('./user')
const accoutRouter = require('./account')


const router = express.Router()

router.get('/user', userRoute )
router.get('/account', accoutRouter )


module.exports = router
// /api/v1/user
// /api/v1/transactions ...