import readline from "readline";
import { Poem } from "../core/domain/Entity/poem";
import { CommandHandler } from "../core/useCase/CommandHandler";

export class PoemsFromCLI {
    constructor(private poemsReader: CommandHandler<Promise<Poem[]>>) {}

    runCommand(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Combien tu veux de poèmes (3 max) ? ", async (poemCount) => {
            console.log((await this.poemsReader.handle(+poemCount)));
            rl.close();
        });
    }
}
