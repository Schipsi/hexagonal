import {IObtainPoems} from "../Ports/IObtainPoems";
import {Poem} from "../../Domain/Entity/poem";

export class InMemoryPoemsLibrary implements IObtainPoems {
    poems = [
        new Poem('Brouette', 'Diane', ['Vroom vroom', 'C\'est la brouette', 'Vroom vroom', 'Elle roule.']),
        new Poem('Pipou', 'Thibaut', ['C\'est le pipou', 'Il est mignou', 'Mais un peu casse-cou.']),
        new Poem('If', 'Rudyard Kipling', ['If you can keep your head when all about you,', 'Are losing theirs and blaming it on you,', 'If you can trust yourself when all men doubt you,', 'But make allowance for their doubting too;']),
    ];

    getNumberOfPoems(count: number): Poem[] {
        return this.poems.slice(0, count);
    }
}
