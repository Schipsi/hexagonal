import { Poem } from "./poem.model";

export interface ObtainPoems {
    getRandomPoem(): Poem;
    getNumberOfPoems(poemsCount: number): Poem[];
}