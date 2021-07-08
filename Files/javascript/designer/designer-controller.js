import Desk from './designer.js';
import { makeDraggable2 } from '../utilities/draggable.js';
import { addDesk, getDesks, storeDesks, clearStorage } from './designer.js';

let desk1 = new Desk(101);

makeDraggable2();

document.getElementById("add-desk").addEventListener("click", () => (addDesk(desk1)));
document.getElementById("get-desks").addEventListener("click", () => getDesks());
