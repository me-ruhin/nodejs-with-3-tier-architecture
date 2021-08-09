const router = require('express').Router()

const {getHandeler,postHandeler,putHandeler,deleteHandeler} = require('../contollers/userController')

router.get('/',getHandeler)
router.post('/',postHandeler)
router.put('/:id',putHandeler)
router.delete('/:id',deleteHandeler)
module.exports = router