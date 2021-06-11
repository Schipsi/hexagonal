import {IAskPoems} from "../Ports/IAskPoems";

export class AskPoemsFromCLI implements IAskPoems {
    getPoemCount(arg: string): number {
        return Number.parseInt(arg, 10);
    }
}
