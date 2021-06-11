import { Poem } from '../../Domain/Entity/poem';


export interface IObtainPoems {
    getNumberOfPoems(count: number): Poem[]
}
