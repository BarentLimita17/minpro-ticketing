import express, { Express, NextFunction, Request, Response } from "express";
import cors from 'cors';

const app: Express = express();
app.use(cors())

const port: number = 8000;

// Import index.ts /routers
import routers from './routers'; // Menunjuk index.ts

app.get('/', (req: Request, res: Response) => {
    // Req: Digunakan Untuk Mengambil Resource dari Client
    // Res: Digunakan Untuk Mengirim Response Menuju Client
    res.send('<h1>IsmayaLive</h1>')
})

app.use(routers)

// Centralize Error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500
    const statusMessage = err.message || 'Internal Server Error'
    res.status(statusCode).send({
        error: true,
        message: statusMessage,
        data: null
    })
})

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port http://localhost:${port}`)
})