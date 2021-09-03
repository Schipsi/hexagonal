import { Poem } from '../domain/Entity/poem';

export interface IObtainPoems {
    handle(count: number): Promise<Poem[]>
}
