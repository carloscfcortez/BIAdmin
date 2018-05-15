const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const ConnectionSchema = new mongoose.Schema({

    server: {
        type: String,
        require: true,
    },

    userId:{
        type: String,
        required: true
    },
    password:{
        type: String,
    },


    createdAt:{
        type: Date,
        dafault: Date.now,
    },
});

ConnectionSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash
});

const Connection = mongoose.model('Connection', ConnectionSchema);

module.exports = Connection;