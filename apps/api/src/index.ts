// import App from './app';

// const main = () => {
//   // init db here

//   const app = new App();
//   app.start();
// };

// main();

import express, { Express, NextFunction, Request, Response } from "express";
import cors from 'cors';

const app: Express = express();
app.use(cors())

const PORT: number = 8000;

// Import index.ts /routers
import routers from './routers'; // Menunjuk index.ts

app.get('/', (req: Request, res: Response) => {
  // Req: Digunakan Untuk Mengambil Resource dari Client
  // Res: Digunakan Untuk Mengirim Response Menuju Client
})

app.use(routers)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500
  const statusMessage = err.message || 'Internal Server Error'
  res.status(statusCode).send({
    error: true,
    message: statusMessage,
    data: null
  })
})

app.listen(PORT, () => {
  console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
})