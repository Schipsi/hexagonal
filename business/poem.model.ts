export class Poem {
    title: string;
    author: string;
    verses: string[];

    constructor(title: string, author: string, verses: string[]) {
        this.title = title;
        this.author = author;
        this.verses = verses;
    }
}