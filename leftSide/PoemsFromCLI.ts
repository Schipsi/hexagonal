import readline from "readline";
import {IAskPoems} from "../core/useCase/IAskPoems";
import { PoemsReader } from "../core/useCase/PoemsReader";

export class PoemsFromCLI implements IAskPoems {
    constructor(private poemsReader: PoemsReader) {}

    handle(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Combien tu veux de poèmes (3 max) ? ", async (poemCount) => {
            console.log((await this.poemsReader.getPoems(+poemCount)));
            rl.close();
        });
    }
}
