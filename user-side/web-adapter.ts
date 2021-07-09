import { RequestForPoems } from "../business/user-side-port-request-poems";
import * as http from 'http';
import { ServerResponse } from "http";
import { PoemReader } from "../business/business-poem-reader";

export class WebAdapter implements RequestForPoems {
    readonly hostname = '127.0.0.1';
    readonly port = 3000;

    constructor(private poemReader: PoemReader) {}

    getPoem(): void {
        const poem = this.poemReader.getRandomPoem();
        const server = http.createServer((req: http.IncomingMessage, res: ServerResponse) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const versesHTML = poem.verses.map((verse: string) => `<p>${verse}</p>`).join('');
            res.write(`
                <h1>${poem.title}</h1>
                <h4>by ${poem.author}</h4>
                <br/>
                ${versesHTML}
            `)
            res.end();
        });
        server.listen(this.port, this.hostname, () => {
            console.log(`Server running at http://${this.hostname}:${this.port}/`);
        });
    }

    readMePoem(): void {
        // TODO
    }

}