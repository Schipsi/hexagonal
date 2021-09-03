import readline from "readline";
import {IAskPoems} from "../core/useCase/IAskPoems";
import { IObtainPoems } from "../core/useCase/IObtainPoems";

export class PoemsFromCLI implements IAskPoems {
    constructor(private poemObtainer: IObtainPoems) {}

    handle(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Combien tu veux de poèmes (3 max) ? ", async (poemCount) => {
            console.log((await this.poemObtainer.handle(Number.parseInt(poemCount, 10))));
            rl.close();
        });
    }
}
