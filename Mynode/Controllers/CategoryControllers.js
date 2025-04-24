
import Category from "../Schema/CategorySchema.js"
export default{
    getAll:(req,res)=>{
        Category.find()
       .then((list)=>{
        res.status(200).send(list)
       })
       .catch((err)=>{
        res.status(404).send(err.message)
       })
    },
    add:(req,res)=>{
        const c=new Category(req.body)
        c.save()
        .then((c)=>{
            res.status(200).send(c)
           })
        .catch((err)=>{
            res.status(404).send(err.message)
           })
    },
    update:(req,res)=>{
        Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((c)=>res.status(200).send(c))
        .catch((err)=>{
            res.status(404).send(err.message)
           })
    },
    delete:(req,res)=>{
        Category.findByIdAndDelete(req.params.id)
        .then(()=>res.status(200).send(true))
        .catch(()=>res.status(404).send(false) )
            
          
    }
}