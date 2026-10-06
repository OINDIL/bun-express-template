// entry point
import express from "express";

const app = express();


app.get('/health', (req, res) => {
    res.json({
        success: true,
        msg: "Server is running fine"
    })
})// server starting code


export default app;