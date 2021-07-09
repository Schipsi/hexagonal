import { Poem } from "./poem.model";
import { ObtainPoems } from "./server-side-port-get-poems";

export class PoemReader {
    constructor(private poemLibrary: ObtainPoems) {}

    getNumberOfPoems(count: number): Poem[] {
        return this.poemLibrary.getNumberOfPoems(count);
    }

    getRandomPoem(): Poem {
        return this.poemLibrary.getRandomPoem();
    }
}