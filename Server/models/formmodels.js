const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    pass: String,
    tokens: [{
      token: String,
    }
  ]
  });

  //Saving JWT Token to Mongoose Schema
  formSchema.methods.generateAuthToken = async function()
  {
    try
    {
      const token = jwt.sign({_id:this._id.toString()}, "moboloustechnologiesisagreatorganizationinindia")
      this.tokens = this.tokens.concat({token:token})
      await this.save();
      return token
    }
    catch(error)
    {
      res.send(error)
    }

  }

  const formModel = mongoose.model('udetail', formSchema);

  module.exports = formModel