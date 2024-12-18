import mongoose from "mongoose";

export const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
            
        })        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1) // 1 code means exit with failure, 0 means sucess
    }
}