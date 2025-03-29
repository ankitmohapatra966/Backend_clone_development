import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))
app.use(express.json({limit: "30Kb"}))
app.use(express.urlencoded({extended: true,limit: "20Kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }