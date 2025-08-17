// import mongoose from "mongoose";

// export const connectDB = async() =>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log(`mongoDB connected : ${connectDB.connection.host}`)
//     }catch(error){
//         console.log("MongoDB connection error:", error)
//     }
// }
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1); // Optional: exit the app if DB fails
    }
};
