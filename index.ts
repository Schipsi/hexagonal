import { IncomingMessage, ServerResponse } from "http";
import { Poem } from "./Domain/Entity/poem";
import {IObtainPoems} from "./Driven/Ports/IObtainPoems";
import { AskPoemsFromWeb } from "./Driver/Adapters/AskPoemsFromWeb";
import {IAskPoems} from "./Driver/Ports/IAskPoems";
import {InMemoryPoemsLibrary} from "./Driven/Adapters/InMemoryPoemsLibrary";
import {AskPoemsFromCLI} from "./Driver/Adapters/AskPoemsFromCLI";
import * as readline from "readline";

abstract class PoemGiver {
    iObtainPoems: IObtainPoems;
    iAskPoems: IAskPoems;

    constructor(iObtainPoems: IObtainPoems, iAskPoems: IAskPoems) {
        this.iObtainPoems = iObtainPoems;
        this.iAskPoems = iAskPoems;
    }

    abstract brouette(): void
}

class PoemsGiverCLI extends PoemGiver {
    constructor() {
        super(new InMemoryPoemsLibrary(), new AskPoemsFromCLI());
    }

    brouette(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Combien tu veux de poèmes (3 max) ? ", (poemCount) => {
            console.log(this.iObtainPoems.getNumberOfPoems(this.iAskPoems.getPoemCount(poemCount)));
            rl.close();
        });
    }
}

class PoemsGiverWeb extends PoemGiver {
    constructor() {
        super(new InMemoryPoemsLibrary(), new AskPoemsFromWeb());
    }

    brouette(): void {
        const http = require('http');const hostname = '127.0.0.1';
        const port = 3000;
        const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            if (req?.url?.includes('getPoems')) {
                res.end(this.iObtainPoems.getNumberOfPoems(this.iAskPoems.getPoemCount(req)).map((poem: Poem) => poem.title).join(', '))
            } else {
                res.end('Hello World\n');
            }

        });
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    }
}


const poemGiverCLI = new PoemsGiverCLI();
poemGiverCLI.brouette();

/*
const poemGiverWeb = new PoemsGiverWeb();
poemGiverWeb.brouette();
*/
