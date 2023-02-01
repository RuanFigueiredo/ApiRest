const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const EmpresaController = require('../controllers/EmpresaController')
const LicencaController = require('../controllers/LicencaController')

router.post('/empresa/insert', EmpresaController.novaEmpresa)

router.get('/empresas', EmpresaController.listarEmpresas)

router.put('/empresa/update/:id', EmpresaController.atualizarEmpresa)

router.delete('/empresa/delete/:id', EmpresaController.removerEmpresa)

router.post('/licenca/insert', LicencaController.novaLicenca)

router.get('/licencas', LicencaController.listarLicencas)

router.put('/licenca/update/:id', LicencaController.atualizarLicenca)

router.delete('/licenca/delete/:id', LicencaController.removerLicenca)





module.exports = router