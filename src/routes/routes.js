const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const EmpresaController = require('../controllers/EmpresaController')

router.post('/empresa/insert', EmpresaController.novaEmpresa)

router.get('/empresas', EmpresaController.listarEmpresas)

module.exports = router