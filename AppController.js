const AppModel = require('./AppModel')

module.exports.getRecipe = async(req, res)=>{
    const myApp= await AppModel.find();
    res.send(myApp)
}

module.exports.saveRecipe = async(req, res)=>{
    const {title, description, image}=req.body;
     AppModel.create({title, description, image})
     .then((data)=>{console.log("added!")
    res.send(data)
    })
}

module.exports.deleteRecipe = async(req, res)=>{
    const {_id}=req.body;
     AppModel.findByIdAndDelete(_id)
     .then(()=>{
    res.send("deleted")
    })
}

module.exports.editRecipe = async(req, res)=>{
    const {_id, title, description,image}=req.body;
     AppModel.findByIdAndUpdate(_id,{title, description, image})
     .then(()=>{
    res.send("edited")
    })
}