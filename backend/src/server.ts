import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';


import { router } from './routes';

//pegando o express 
const app = express();
app.use(express.json());
app.use(cors());
 
//pegando as rotas colocando em express(que ja ta em json)
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err  instanceof Error) {
        //se for uma instancia do tipo error
        return res.status (400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status:'error',
        mensage: 'internal server error.'    
    })
} )


//dizendo onde vamos ver (localstorage 3333)
app.listen(3333,  () => console.log("Servidor Online"));
 
