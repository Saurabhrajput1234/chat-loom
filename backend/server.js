const express = require("express");
const dotenv = require("dotenv")
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const {errorHandler,notFound} = require('./middleware/errorMiddleware')

dotenv.config();


const app = express();
app.use(express.json());



connectDB();




app.get("/" , (req,res)=>{
 res.send ( `Api is run on the port no ${PORT}` )
} )

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));