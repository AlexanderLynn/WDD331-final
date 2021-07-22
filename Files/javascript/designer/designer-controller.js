import { drawDesks, toggleManagement, toggleReservation} from './designer-view.js';
import Desk, { test } from './designer.js';
//import { makeDraggable2 } from '../utilities/draggable.js';
import { addDesk, getDesks, saveDeskPosition, clearStorage } from './designer.js';


//initial draw
drawDesks(getDesks());
// Just for testing old dragging method
//makeDraggable2();



//Button Handlers
document.getElementById("add-desk").addEventListener("click", () => {addDesk();  drawDesks(getDesks());});
document.getElementById("save-desks").addEventListener("click", () => saveDeskPosition(getDesks()));
document.getElementById("get-desks").addEventListener("click", () => getDesks());
document.getElementById("clear-storage").addEventListener("click", () => {clearStorage(); drawDesks(getDesks());});
document.getElementById("deskManagement").addEventListener("click", () => {toggleManagement(); drawDesks(getDesks());});
document.getElementById("deskReservation").addEventListener("click", () => {toggleReservation(getDesks()); drawDesks(getDesks());});
document.getElementById("test2").addEventListener("click", () => test());


