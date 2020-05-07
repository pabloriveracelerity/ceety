'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Crypto = require('crypto');
const Nodemailer = require('nodemailer');
//const gmailConfig = require('config').get('email.gmail');
const Promise = require('promise');

var userPostSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'
    }

});

var userPostSchema = new Schema({
    body: {
        type: String,
        trim: false, 
        default: '',
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        trim: true,
        default: '',
    }
});


Mongoose.model('Post', PostSchema);