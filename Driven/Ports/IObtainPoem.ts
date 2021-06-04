import { Poem } from '../../Domain/Entity/poem';


export interface IObtainPoem {
    getNumberOfPoems(count: number): Poem[]
}
