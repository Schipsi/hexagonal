import { IncomingMessage } from "http";
import * as querystring from "querystring";
import * as url from "url";
import {IAskPoems} from "../Ports/IAskPoems";

export class AskPoemsFromWeb implements IAskPoems {
    getPoemCount(arg: IncomingMessage): number {
        const parsedUrl = arg.url ? url.parse(arg.url) : null;
        if (parsedUrl?.query) {
            const query  = querystring.parse(parsedUrl.query);

            return Number.parseInt(query.poemCount as string, 10);
        }

        return 0;
    }
}
