import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/CartRoute.js";


//app config
const app = express();
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection

connectDB();

//add api endpoint

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`server stareted on http://localhost:${port}`)
})
