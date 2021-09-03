import { PoemsFromWeb } from "./leftSide/PoemsFromWeb";
import {InMemoryPoemsLibrary} from "./rightSIde/InMemoryPoems/InMemoryPoemsLibrary";
import {PoemsFromCLI} from "./leftSide/PoemsFromCLI";
import { APIPoemsLibrary } from "./rightSIde/APIPoems/APIPoemsLibrary";


const poetryApiAdapter = new APIPoemsLibrary();
const inMemoryPoemsLibrary = new InMemoryPoemsLibrary();
const askAPIPoemsFromCLI = new PoemsFromCLI(poetryApiAdapter);
const askInMemoryPoemsFromCLI = new PoemsFromCLI(inMemoryPoemsLibrary);
const askAPIPoemsFromWeb = new PoemsFromWeb(poetryApiAdapter);
const askInMemoryPoemsFromWeb = new PoemsFromWeb(inMemoryPoemsLibrary);

/*askAPIPoemsFromCLI.handle();
askInMemoryPoemsFromCLI.handle();
askAPIPoemsFromWeb.handle();
 */
// try with: http://localhost:3000/?poemCount=3
askInMemoryPoemsFromWeb.handle();
