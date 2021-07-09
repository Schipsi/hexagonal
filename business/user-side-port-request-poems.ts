import { Poem } from "./poem.model";

export interface RequestForPoems {
    getPoem(): void;
    readMePoem(): void;
}