import { Router } from 'express';
import {ethers} from 'ethers';
import artifacts from './artifacts.json' assert{type:"json"}

const router = Router();
let result;
const provider =new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const signer = await provider.getSigner();
console.log(signer.address);
const abi = artifacts.abi;
console.log(abi);
const address = artifacts.ContractAddress;
console.log(address);
const contractInstance = new ethers.Contract(address,abi,signer);

router.get("/", function (req, res) { res.send("Welcome to Backend") })
router.post('/create',async function(req,res){
    const data=req.body;
    try{
        console.log(data);
        const response = await contractInstance.store(data.input)
        res.status(201).json({msg:"Data Saved"})
    }
    catch (error){
        res.status(500).json({msg:"Data Not saved" })
    }
})

router.get('/read',async function(req,res){
        try{
        result=await  contractInstance.retrieve()
        console.log(result);
    res.status(200).json({input:Number(result)} );
        }
        catch(error)
        {
    res.status(500).json(error)
        }
    })

export default router