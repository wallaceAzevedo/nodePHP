'use strict'

const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('User');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({status:true})
;}
/*
exports.create = async(data) => {
    console.log('entrou 01');
    console.log(data);
    let user = new User(data);
    console.log('entrou 02');
    console.log(user);
    console.log('Entrou 03');
    let userCreated = await user.save();
    console.log('entrou 04');
    console.log(userCreated);
    return await userCreated;
}
*/
exports.create = async(data) => {
    let user = new User(data);
    return await user.save();
}

exports.update = async(data) => {
   console.log(data);
    /*
    let userUpdate = await user.findByIdAndUpdate(id, {
        $set:{
            name: data.name,
            email:data.email,
            password: data.password,
            status: data.status
        }
    }); */
    return await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        }
 });
}

exports.delete = async(id, data) => {
    return await User.findOneAndDelete({_id: id })
}

exports.deleteLogic = async(data) => {
    console.log(data);
      return await User.findByIdAndUpdate(id, {
         $set: {
             status: false
         }
  });
 }