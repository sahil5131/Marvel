// const mongoose = require('mongoose')
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
// const Schema = mongoose.Schema
// const passportLocalMongoose = require('passport-local-mongoose');
import passportLocalMongoose from 'passport-local-mongoose';
var User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})
  
User.plugin(passportLocalMongoose);
  
export default mongoose.model('Loguser', User)