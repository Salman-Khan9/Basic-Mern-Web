const express = require("express");
const Task = require("./body");

const router = express.Router();
router.post("/api/testing", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
router.get("/api/testing", async (req, res) => {
  try {
    const task = await Task.find(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
router.get("/api/testing/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const task = await Task.findById(id)
        if(!task){
            return res.status(404).json(`wrong id`)
        }
        res.status(200).json(task)
    } catch (error) {
    res.status(500).json({ msg: error.message });
        
    }
})
router.delete("/api/testing/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const task = await Task.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json(`wrong id`)
        }
        res.status(200).send("task deleted")
    } catch (error) {
    res.status(500).json({ msg: error.message });
        
    }
})
router.put("/api/testing/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const task = await Task.findByIdAndUpdate({_id:id},req.body,{new:true})
        if(!task){
            return res.status(404).json(`wrong id`)
        }
        res.status(200).json(task)
    } catch (error) {
    res.status(500).json({ msg: error.message });
        
    }
})

module.exports = router;
