import express, {Request, Response, Router} from 'express';
import {add} from "./funcs/math.js";
import {get_addresses} from "./funcs/network.js";

const app: express.Application = express();

const port: number = 3000;

const router: Router = express.Router();

router.get('/add/:a/:b', (req: Request<{ a: string, b: string }>, res: Response): void => {
    const _a: number = Number(req.params.a);
    const _b: number = Number(req.params.a);
    res.send(`sum is ${add(_a, _b)}`);
});

app.use(router);

const addresses: (string | null)[] = get_addresses();
app.listen(port, (): void => {

    console.log('start listening on...')
    addresses.forEach(addr => {
        if (addr) {
            console.log(`\thttp://${addr}:${port}/`)
        }
    })
});