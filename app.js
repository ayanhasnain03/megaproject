const express = require("express");
const app = express();
const db = require("./db/conn")
const Employee = require("./db/models/employee")
const port = process.env.PORT || 5000;
app.use(express.json());
//==> Create 
app.post("/employees",async(req,res)=>{
  try {
    const user = new Employee(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
  } catch (error) {
    res.status(400).send(error)
    
  }
})

//=========> Read 
app.get("/employees",async(req,res)=>{
  try {
    const employeesData = await Employee.find()
    res.status(200).send(employeesData)
    console.log(employeesData)
  } catch (e) {
    res.status(400).send(e)
    
  }
})
//==> Get Indivisual Data of employess
app.get("/employees/:id",async(req,res)=>{
  try {
    const _id = req.params.id
    const employee = await Employee.findById({_id})
    res.send(employee)
  } catch (e) {
    res.send(e)
  }
})

//=====> update 
app.patch("/employees/:id", async(req,res)=>{
  try {
   const _id = req.params.id;
   const employee = await Employee.findByIdAndUpdate(_id, req.body,{
    new:true
   }) 
   res.status(200).send(employee)
  console.log(employee)
  } catch (error) {
   res.status(400).send(error)
    
  }
})
app.delete("/employees/:id", async(req,res)=>{
  try {
   const _id = req.params.id;
   const employee = await Employee.findByIdAndDelete(_id, req.body,{
    new:true
   }) 
   res.status(200).send(employee)
  console.log(employee)
  } catch (error) {
   res.status(400).send(error)
    
  }
})

app.listen(port,()=>{
    console.log(`server run on http://localhost:${port}`)
})