import { GetXPoems } from "./core/useCase/GetXPoems/GetXPoems";
import { PoemsFromWeb } from "./leftSide/PoemsFromWeb";
import { InMemoryPoemsLibrary } from "./rightSIde/InMemoryPoems/InMemoryPoemsLibrary";
import { PoemsFromCLI } from "./leftSide/PoemsFromCLI";
import { APIPoemsLibrary } from "./rightSIde/APIPoems/APIPoemsLibrary";


const poemsReaderFromAPI = new GetXPoems(new APIPoemsLibrary());
const poemsReaderFromMemory = new GetXPoems(new InMemoryPoemsLibrary());
const askAPIPoemsFromCLI = new PoemsFromCLI(poemsReaderFromAPI);
const askInMemoryPoemsFromCLI = new PoemsFromCLI(poemsReaderFromMemory);
const askAPIPoemsFromWeb = new PoemsFromWeb(poemsReaderFromAPI);
const askInMemoryPoemsFromWeb = new PoemsFromWeb(poemsReaderFromMemory);

/*
askAPIPoemsFromCLI.runCommand();
askInMemoryPoemsFromCLI.runCommand();
*/
// try with: http://localhost:3000/?poemCount=3
/*
askAPIPoemsFromWeb.start();
askInMemoryPoemsFromWeb.start();
 */


askAPIPoemsFromCLI.runCommand();
