const { verify } = require("jsonwebtoken")
const formModel = require("../models/formmodels")

module.exports = {
    getAll: async (req,res)=> {

        const findall = await formModel.find()  

        res.send(findall)  
    },

    postData: async (req,res)=> {

        console.log(req.body)

        const saveData = new formModel({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            pass: req.body.pass
        })

        //Generating JWT Token by user registeration

        const token = await saveData.generateAuthToken();
         const registered = await saveData.save();
         console.log("Registered using JWT: " + token)


    },

    loginData: async (req,res)=>{

        console.log(req.body)

        const email = req.body.email
        const pass = req.body.pass

        console.log(email)

        const verify = await formModel.findOne({email:email})

         formModel.findOne({email:email}, async (err,user)=>
        {
            if(user)
            {
                if(pass===user.pass)
                {

                    //Passing JWT Token while login
                    res.send("success")
                    const token = await verify.generateAuthToken();
                    console.log('The generated token is:' + token)

                }
                else
                {
                    res.send("Wrong Password")
                }
                
            }
            else{
                res.send("User Not Found")
            }
        })
    
    }
}