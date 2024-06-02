const mongoose = require('mongoose');
// const server = require('../server');



const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then((data)=>{
        console.log(`mongoDb connected successfully at ${data.connection.host}`);
    })
}

module.exports = connectDatabase;