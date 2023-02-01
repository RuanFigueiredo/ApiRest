const database = require('../database/connection')

class EmpresaController {
    novaEmpresa(request,response){
        const {RazaoSocial, CNPJ,CEP,Cidade, Estado, Bairro, Complemento }= request.body

        console.log(RazaoSocial, CNPJ, CEP,Cidade, Estado, Bairro, Complemento)

        database.insert({RazaoSocial, CNPJ, CEP, Cidade, Estado, Bairro, Complemento }).table("Empresa").then(data=>{
            console.log(data)
            response.json({message:"Empresa criada com sucesso !"})
        }).catch(error=>{
            console.log(error)
        })

    }

    listarEmpresas(request, response){
        database.select("*").table("Empresa").then(empresas=>{
            console.log(empresas)
            response.json(empresas)
        }).catch(error=>{
            console.log(error)
        })
    }
}



module.exports = new EmpresaController()