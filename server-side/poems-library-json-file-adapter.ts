import { Poem } from "../business/poem.model";
import { ObtainPoems } from "../business/server-side-port-get-poems";
import * as data from './poems.json';

export class PoemsLibraryFromJsonFile implements ObtainPoems {
    private convertJsonPoemToBusinessPoem(jsonPoem: { title: string; author: string; content: string; }): Poem {
        const {title, author, content } = jsonPoem;
        const verses: string[] = content.split('\n');
        return new Poem(title, author, verses);
    }

    getRandomPoem(): Poem {
        const randomIndex = Math.floor(
            Math.random() * data.length
          );
        return this.convertJsonPoemToBusinessPoem(data[randomIndex]);
    }

    getNumberOfPoems(poemsCount: number): Poem[] {
        const allPoems = data.map(this.convertJsonPoemToBusinessPoem);

        const numberOfPoemsReturnable = poemsCount > data.length ? data.length : poemsCount;

        return allPoems.splice(0, numberOfPoemsReturnable);
    }
}