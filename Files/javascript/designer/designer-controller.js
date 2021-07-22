import { drawDesks, toggleManagement} from './designer-view.js';
import Desk from './designer.js';
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
document.getElementById("deskManagement").addEventListener("click", () => toggleManagement());


