import Buy from "../Schema/BuySchema.js"
export default{
    getByCode:(req,res)=>{
        Buy.find({code_client:req.params.code})
     .then((g)=>{console.log(g) ; res.status(200).send(g)})
     .catch((err)=>res.status(404).send(err.message))
    },
    savebuy:(req,res)=>{
        const b=new Buy(req.body)
        b.save()
        .then((by)=>res.status(200).send(by))
        .catch((err)=>res.status(404).send(err))
    }

}