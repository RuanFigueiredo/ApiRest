const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const EmpresaController = require('../controllers/EmpresaController')

router.post('/empresa/insert', EmpresaController.novaEmpresa)

router.get('/empresas', EmpresaController.listarEmpresas)

//router.get('/empresa/:id', EmpresaController.listarUmaEmpresa)

router.put('/atualizar/empresa/:id', EmpresaController.atualizarEmpresa)

router.delete('/deletar/empresa/:id', EmpresaController.deletarEmpresa)



module.exports = router