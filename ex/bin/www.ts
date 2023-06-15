import {app} from "../app.js";
import {get_ipv4_addresses} from "../funcs/network.js";

const port: number = 3000;

app.listen(port, (): void => {

    console.log('start listening on...');

    get_ipv4_addresses().forEach((addr: string): void => {
        console.log(`\thttp://${addr}:${port}/`)
    })
});