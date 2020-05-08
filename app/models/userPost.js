'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Crypto = require('crypto');
const Nodemailer = require('nodemailer');
//const gmailConfig = require('config').get('email.gmail');
const Promise = require('promise');

var UserPostSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PostSchema'
    }
});




Mongoose.model('UserPost', UserPostSchema);