const item = require("../models/collectionItem.js");
const itemService = require("../Services/itemService.js");

class itemController{
    async create (req,res){
        try{
            console.log(req.files)
            const item = await itemService.create(req.body,req.files.picture);
            return res.status(200).json(item);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async getAll (req,res){
        try{
            const items = await itemService.getAll(req.page,req.limit);
            return res.status(200).json(items);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async getOne (req,res){
        try{
            const item = await itemService.getOne(req.params.id)
            return res.status(200).json(item);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async update (req,res){
        try{
            const item = await itemService.update(req.body)
            return res.status(200).json(item);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async delete (req,res){
        try{
            const item = await itemService.delete(req.params.id);
            return res.status(200).json(item);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
}
module.exports = new itemController