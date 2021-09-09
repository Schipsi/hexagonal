import http, { IncomingMessage, ServerResponse } from "http";
import * as querystring from "querystring";
import * as url from "url";
import { Poem } from "../core/domain/Entity/poem";
import { CommandHandler } from "../core/useCase/CommandHandler";

export class PoemsFromWeb {
    private readonly hostname = 'localhost';
    private readonly port = 3000;
    constructor(private poemsReader: CommandHandler<Promise<Poem[]>>) {}

    start(): void {
        const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
            const askedPoemCount = this.getPoemsCountFromUrl(req);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            if (req?.url?.includes('poemCount')) {
                const poems = await this.poemsReader.handle(askedPoemCount);
                const response: string = poems.reduce((acc: string, poem: Poem) => {
                    return acc + this.formatPoemForWeb(poem);
                }, '')
                res.end(response);
            } else {
                res.end('Wtf are you doing here?');
            }

        });
        server.listen(this.port, this.hostname, () => {
            console.log(`Server running at http://${this.hostname}:${this.port}/`);
        });
    }

    private formatPoemForWeb(poem: Poem): string {
        return `
            <h1>${poem.title} de <i>${poem.author}</i></h1>
            <p>${poem.verses.join('<br />')}</p>
            <br />
        `;
    }

    private getPoemsCountFromUrl(arg: IncomingMessage): number {
        const parsedUrl = arg.url ? url.parse(arg.url) : null;
        if (parsedUrl?.query) {
            const query = querystring.parse(parsedUrl.query);

            return Number.parseInt(query.poemCount as string, 10);
        }

        return 0;
    }
}
