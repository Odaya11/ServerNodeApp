import Game from "../Schema/GameSchema.js"
export default{
  getAll:(req,res)=>{
   Game.find()
         .then((list)=>{
          res.status(200).send(list)
         })
         .catch((err)=>{
          res.status(404).send(err.message)
         })
  } , 
 getById:(req,res)=>{
   Game.findById(req.param.id).populate('code_Category')
 .then((g)=>res.status(200).send(g))
 .catch((err)=>res.status(404).send(err.message))
 },
 getByCategory:(req,res)=>{
   Game.find({code_category:req.params.cid})
    .then((g)=>res.status(200).send(g))
    .catch((err)=>res.status(404).send(err.message))
 },
 getByNameAndPass:(req,res)=>{
   Game.findOne({name:req.params.name,price:req.params.price})
 .then((g)=>{
    if(g)
        res.status(200).send(g)
    else
    res.status(200).send(false)
 })
    .catch((err)=>res.status(404).send(err.message))
},
 add:(req,res)=>{
    const g=new Game(req.body)
    g.save()
    .then((g)=>res.status(200).send(g))
    .catch((err)=>res.status(404).send(err.message))
 },
 update:(req,res)=>{
   Game.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((g)=>res.status(200).send(g))
    .catch((err)=>{
        res.status(404).send(err.message)
       })
 },
 delete:(req,res)=>{
   Game.findByIdAndDelete(req.params.id)
            .then(()=>res.status(200).send(true))
            .catch(()=>res.status(404).send(false) )
 }
}