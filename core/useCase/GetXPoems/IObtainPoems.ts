import { Poem } from '../../domain/Entity/poem';

export interface IObtainPoems {
    getXPoems(count: number): Promise<Poem[]>
}
