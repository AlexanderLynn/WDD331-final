import { drawDesks, toggleManagement, toggleReservation} from './designer-view.js';
import Desk, { addDesk, getDesks, saveDeskPosition, clearStorage, reserveDesk } from './designer.js';
//import { makeDraggable2 } from '../utilities/draggable.js';
//import { addDesk, getDesks, saveDeskPosition, clearStorage } from './designer.js';


//initial draw
try {
    drawDesks(getDesks());
}
catch {
    console.log("Initialized first startup")
    clearStorage();
    drawDesks(getDesks());
}
// Just for testing old dragging method
//makeDraggable2();



//Button Handlers
document.getElementById("add-desk").addEventListener("click", () => {addDesk();  drawDesks(getDesks());});
document.getElementById("save-desks").addEventListener("click", () => saveDeskPosition(getDesks()));
document.getElementById("get-desks").addEventListener("click", () => getDesks());
document.getElementById("clear-storage").addEventListener("click", () => {clearStorage(); drawDesks(getDesks());});
document.getElementById("deskManagement").addEventListener("click", () => {toggleManagement(); drawDesks(getDesks());});
document.getElementById("deskReservation").addEventListener("click", () => {toggleReservation(getDesks()); drawDesks(getDesks());});
document.getElementById("reserve-desk").addEventListener("click", () => {reserveDesk(); drawDesks(getDesks())});


