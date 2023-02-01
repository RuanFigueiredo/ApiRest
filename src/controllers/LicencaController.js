const database = require('../database/connection')

class LicencaController {
    novaLicenca(request,response){
        const {Empresa, Numero, OrgaoAmbiental, Emissao, Validade}= request.body

        console.log(Empresa, Numero, OrgaoAmbiental, Emissao, Validade)

        database.insert({Empresa, Numero, OrgaoAmbiental, Emissao, Validade }).table("Licenca").then(data=>{
            console.log(data)
            response.json({message:"Licenca criada com sucesso !"})
        }).catch(error=>{
            console.log(error)
        })

    }

    listarLicencas(request, response){
        database.select("*").table("Licenca").then(licencas=>{
            console.log(licencas)
            response.json(licencas)
        }).catch(error=>{
            console.log(error)
        })
    }


    atualizarLicenca(request,response){
        const id = request.params.id
        const {Numero} = request.body

        database.where({idLicenca:id}).update({Numero:Numero}).table("Licenca").then(data=>{
            response.json({message:"Licenca atualizada com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerLicenca(request, response){
        const id = request.params.id

        database.where({idLicenca:id}).del().table("Licenca").then(data=>{
            response.json({message: "licenca removida com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }
    
}

module.exports = new LicencaController()