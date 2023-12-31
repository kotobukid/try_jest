import express, {Request, Response, Router} from 'express';
import {add} from "./funcs/math.js";

const app: express.Application = express();

const router: Router = express.Router();
router.get('/add/:a/:b', (req: Request<{ a: string, b: string }>, res: Response): void => {
    const _a: number = Number(req.params.a);
    const _b: number = Number(req.params.b);
    res.send(`sum is ${add(_a, _b)}`);
});

app.use(router);

export {app}