import Client from "../Schema/ClientSchema.js"


export default{
    add:(req,res)=>{
        const c=new Client(req.body)
        c.save()
        .then((c)=>res.status(200).send(c))
        .catch((err)=>res.status(404).send(err.message))
    },
    isExsist:(req,res)=>{
        Client.findOne({name:req.params.name,password:req.params.password})
        .then((g)=>{
        if(g)
            res.status(200).send(g)
        else
        res.status(200).send(false)
     })
        .catch((err)=>res.status(404).send(err.message))
    }
}