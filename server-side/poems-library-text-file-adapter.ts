import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import { ObtainPoems } from '../business/server-side-port-get-poems';
import { Poem } from '../business/poem.model';

export class PoemsLibraryFromTextFiles implements ObtainPoems {
    getRandomPoem(): Poem {
        const poemFileNames = this.getListOfFiles();
        const randomIndex = Math.floor(
            Math.random() * poemFileNames.length
        );
        const poem = this.processLineByLine(poemFileNames[randomIndex]);

        return poem;
    }

    getNumberOfPoems(poemsCount: number): Poem[] {
        // TODO
        return [];
    }

    private processLineByLine(fileName: string): Poem {
        const poem: Poem = new Poem(fileName.replace('.txt',''), 'inconnu', []);

        poem.verses = fs.readFileSync(path.join(__dirname, `poems/${fileName}`), 'utf-8').split('\n').filter(Boolean);

        return poem;
    }

    getListOfFiles(): string[] {
        let fileNames: string[] = [];   
        fs.readdirSync(path.join(__dirname, 'poems')).forEach(file => {
            fileNames.push(file);
        });
        return fileNames;
    }
}
