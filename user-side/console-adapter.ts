import { Poem } from "../business/poem.model";
import { RequestForPoems } from "../business/user-side-port-request-poems";
import * as readline from "readline";
import { PoemReader } from "../business/business-poem-reader";

export class ConsoleAdapter implements RequestForPoems {

    constructor(private poemReader: PoemReader) {}

    getPoem(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Do you want a poem ? ", (response) => {
            if (response.includes('yes')) {
                console.log(this.poemReader.getRandomPoem());
            }  else {
                console.log('fuck off then.')
            }
            rl.close();
        });
    }

    readMePoem(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Do you want me to read a poem ? ", (response) => {
            const poem = this.poemReader.getRandomPoem();
            if (response.includes('yes')) {
                console.log(`Here is a poem called "${poem.title}" written by ${poem.author}`);
                console.log('...');
                poem.verses.forEach(element => {
                    setTimeout(() => {
                        console.log(element);
                    }, (poem.verses.indexOf(element) + 1) * 2000)
                });
            }  else {
                console.log('fuck off then.')
            }
            rl.close();
        });
    }
}