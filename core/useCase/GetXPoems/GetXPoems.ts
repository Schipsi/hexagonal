import { Poem } from "../../domain/Entity/poem";
import { CommandHandler } from "../CommandHandler";
import { IObtainPoems } from "./IObtainPoems";

export class GetXPoems implements CommandHandler<Promise<Poem[]>> {
    constructor(private poemsObtainer: IObtainPoems) {}

    handle(count: number): Promise<Poem[]> {
        return this.poemsObtainer.getXPoems(count);
    }
}
