const mongoose = require('mongoose');

//Se Establece la cadena de conexion que proporciona Mongo Atlas
//mongodb+srv://Dennis2003:<password>@cluster0.euw1ldq.mongodb.net/

//Se cambia <password> por la contraseña que se usara ademas de agregar al final el nombre de la BD


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connectDB;
