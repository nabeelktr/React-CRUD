import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import colors from "colors";
import adminRouter from './routes/adminRoutes.js'
import userRouter from "./routes/userRoutes.js"
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';

connectDB()

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(express.json())
app.use(errorHandler);

app.use('/',userRouter)
app.use('/admin',adminRouter)


app.listen(PORT, () => {
    console.log('Listening to PORT..'.bgGreen.bold)
})

export default app;