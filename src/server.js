import express from 'express';
import dotenv from 'dotenv';
import studentRouter from "./routes/studentRoutes.js";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(studentRouter)

app.use((req, res) => {
    res.status(404).type('text/plain;charset=UTF-8').send('404 Not Found!')
});

app.listen(port, () => console.log(`Server running on port ${port}. Press CTRL+C to stop`));