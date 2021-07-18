import { drawDesks } from './designer-view.js';
import Desk from './designer.js';
//import { makeDraggable2 } from '../utilities/draggable.js';
import { addDesk, getDesks, storeDesks, clearStorage } from './designer.js';



// Just for testing
//makeDraggable2();

//Button Handlers
document.getElementById("add-desk").addEventListener("click", () => addDesk());
document.getElementById("get-desks").addEventListener("click", () => getDesks());
drawDesks(getDesks());
console.log(getDesks());
