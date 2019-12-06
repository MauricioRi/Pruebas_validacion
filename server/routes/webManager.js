const express = require('express')
const router = express.Router()

const users = require('../querys/users')
const Insumo = require('../querys/Insumo')

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.status(200).send('Saludos desde express')
})

// insertar un nuevo usuario tipo kiosko
router.post('/UserInsert', users.insertUser)

// obtener los usuarios registrados
router.get('/kiosks', users.getUsers)

// actualizar un kiosko
router.post('/kioskUpdate', users.setUser)

// insertar un nuevo usuario tipo kiosko
router.post('/InsumoInsert', Insumo.insertInsumo)

// obtener los usuarios registrados
router.get('/Insumo', Insumo.getInsumo)

// actualizar un kiosko
router.post('/InsumoUpdate', Insumo.setInsumo)

module.exports = router