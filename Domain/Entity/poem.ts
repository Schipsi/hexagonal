export class Poem {
    public title: string;
    private author: string;
    private verses: string[];

    constructor(title: string, author: string, verses: string[]) {
        this.title = title;
        this.author = author;
        this.verses = verses;
    }
}
