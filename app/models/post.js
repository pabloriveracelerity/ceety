'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Crypto = require('crypto');
const Nodemailer = require('nodemailer');
//const gmailConfig = require('config').get('email.gmail');
const Promise = require('promise');
const PostStatus = require('./PostStatus');
const UserPost = require('./userPost');

var PostSchema = new Schema({
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

function createPost(title, body, user){
    // create post 
    const post = new Post({
        title: title,
        body: body,
    })
    // create user post
    const userPost = new UserPost({
        user: user,
        post: post
    })
    // create post status 
    const postStatus = new PostStatus({
        post: post
    })
return {post:post, userpost: userPost, poststatus: postStatus};
}




