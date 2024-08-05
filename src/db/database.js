import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'
const connectDB = async ()=>{
   try {
    const connectionInstance = await mongoose.connect(`mongodb+srv://waleed09ahmad42:testing123@cluster0.amo4dav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log(`\n MONGODB connected !! DB HOST:${connectionInstance.connection.host}`)
   } catch (error) {
        console.log(error)
        process.exit(1)
   }
}
export default connectDB;