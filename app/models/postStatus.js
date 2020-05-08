'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Crypto = require('crypto');
const Nodemailer = require('nodemailer');
//const gmailConfig = require('config').get('email.gmail');
const Promise = require('promise');

const statuses = {
    draft: 'draft',
    published: 'published'
};

var PostStatus = new Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PostSchema'
    },
    status: {
        type: String,
        trim: true, 
        default: statuses.draft
    }
});

Mongoose.model('PostStatus', PostStatus);