import { PoemReader } from "./business/business-poem-reader";
import { ObtainPoems } from "./business/server-side-port-get-poems";
import { PoemsLibraryFromJsonFile } from "./server-side/poems-library-json-file-adapter";
import { PoemsLibraryFromTextFiles } from "./server-side/poems-library-text-file-adapter";
import { ConsoleAdapter } from "./user-side/console-adapter";
import { WebAdapter } from "./user-side/web-adapter";

// *** Server side / Driven ***
// JSON file 
const jsonFileAdapter: ObtainPoems = new PoemsLibraryFromJsonFile();
// Text files
const textFilesAdapter: ObtainPoems = new PoemsLibraryFromTextFiles();

const fileAdapter: ObtainPoems = textFilesAdapter;

// *** Business ***
const poemReader: PoemReader = new PoemReader(fileAdapter);

// *** Client side / Driver *** 
// Console
const consoleAdapter: ConsoleAdapter = new ConsoleAdapter(poemReader);
// Web
const webAdapter: WebAdapter = new WebAdapter(poemReader);

// consoleAdapter.readMePoem();
webAdapter.getPoem();