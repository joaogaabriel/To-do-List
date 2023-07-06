const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://gabriel:admin@cluster0.kh2pgyy.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err))

}

module.exports = connectToDb;