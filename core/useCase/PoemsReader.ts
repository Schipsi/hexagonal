import { Poem } from "../domain/Entity/poem";
import { IObtainPoems } from "./IObtainPoems";

export class PoemsReader {
    constructor(private poemsObtainer: IObtainPoems) {}

    getPoems(count: number): Promise<Poem[]> {
        return this.poemsObtainer.handle(count);
    }
}
