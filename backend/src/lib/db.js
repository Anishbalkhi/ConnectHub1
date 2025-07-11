import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected : ${conn.connection.host}`);
    }catch{
        console.log('Error in connecting to MongoDb ', error);
        process.exit(1);

    }
}