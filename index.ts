import { PoemsReader } from "./core/useCase/PoemsReader";
import { PoemsFromWeb } from "./leftSide/PoemsFromWeb";
import {InMemoryPoemsLibrary} from "./rightSIde/InMemoryPoems/InMemoryPoemsLibrary";
import {PoemsFromCLI} from "./leftSide/PoemsFromCLI";
import { APIPoemsLibrary } from "./rightSIde/APIPoems/APIPoemsLibrary";


const poemsReaderFromAPI = new PoemsReader(new APIPoemsLibrary());
const poemsReaderFromMemory = new PoemsReader(new InMemoryPoemsLibrary());
const askAPIPoemsFromCLI = new PoemsFromCLI(poemsReaderFromAPI);
const askInMemoryPoemsFromCLI = new PoemsFromCLI(poemsReaderFromMemory);
const askAPIPoemsFromWeb = new PoemsFromWeb(poemsReaderFromAPI);
const askInMemoryPoemsFromWeb = new PoemsFromWeb(poemsReaderFromMemory);

/*askAPIPoemsFromCLI.handle();
askInMemoryPoemsFromCLI.handle();
askAPIPoemsFromWeb.handle();
 */
// try with: http://localhost:3000/?poemCount=3
askAPIPoemsFromCLI.handle();
