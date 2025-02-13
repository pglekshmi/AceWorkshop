import { Router } from 'express';
const router = Router();
let result;
router.get("/", function (req, res) { res.send("Welcome to Backend") })
router.post('/create',function(req,res){
    const data=req.body;
    try{
        result=data;
        res.status(201).json({msg:"Data Saved"})
    }
    catch (error){
        res.status(500).json({msg:"Data Not saved" })
    }
})

router.get('/read',function(req,res){
        try{
    res.status(200).json(result);
        }
        catch(error)
        {
    res.status(500).json(error)
        }
    })

export default router