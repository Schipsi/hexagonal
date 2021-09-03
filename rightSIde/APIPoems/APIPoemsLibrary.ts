import got from "got";
import {IObtainPoems} from "../../core/useCase/IObtainPoems";
import {Poem} from "../../core/domain/Entity/poem";
import { APIPoem } from "./APIPoem";

export class APIPoemsLibrary implements IObtainPoems {
    private readonly randomPoemsUrl = 'https://poetrydb.org/random/';

    async handle(poemCount: number): Promise<Poem[]> {
        const poems: APIPoem[] = (await got<APIPoem[]>(`${this.randomPoemsUrl}${poemCount}`, { responseType: 'json' })).body;

        return this.convertAPIPoemsToDomainPoems(poems);
    }

    private convertAPIPoemsToDomainPoems(poems: APIPoem[]): Poem[] {
        return poems.map((poem: APIPoem) => {
            return new Poem(poem.title, poem.author, poem.lines);
        })
    }
}
