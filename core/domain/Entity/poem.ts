export class Poem {
    public title: string;
    public author: string;
    public verses: string[];

    constructor(title: string, author: string, verses: string[]) {
        this.title = title;
        this.author = author;
        this.verses = verses;
    }
}
