'use strict'

const mongoose = require('mongoose');
const schema = mongoose.shema;

const ProductModel = new schema({
    user: {
        type:mongoose.schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    title: {type:String, required: true, trim: true},
    price: {type:Number, required: true},
    description: {type:String, required: true, trim: true},
    buyUrl: {type:String, required: false, trim:true},
    status: {type:Boolean, required: true, default:true},
    creationDate: {type:Date, default:Date.now }
}, { versionKey:false });

ProductModel.pre('save', next =>{
    let now = new Date();
    if(!this.creationDate){
        this.creationDate = now;
    }
});

module.exports = mongoose.model('Product', ProductModel);