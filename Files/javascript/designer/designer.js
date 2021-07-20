//Desk object
export default class Desk {
    constructor(deskNumber) {
        this.deskNumber = deskNumber;
        this.position = [0,0];
    }
    getDeskNumber() {
        return this.deskNumber;
    }
    getDeskPosition() {
        return this.position;
    }
}


//Appends new desk object to array of desks in local storage
export function addDesk() {
    let desk = new Desk();
    //Checks if local storage already exists; Initializes if not
    let deskList;
    if (getDesks() === null || typeof getDesks() === 'undefined')
        deskList = [];
    else
        deskList = getDesks();
    
    //Adds desk to array
    deskList.push(desk);
    storeDesks(deskList);
    saveDeskPosition();
}

//Removes a desk from array of desks in local storage
export function removeDesk(desk) {
    
}

//Gets array of desk objects from local storage
export function getDesks() {
    try {
        console.log("tried");
        console.log("current storage:");
        console.log(JSON.parse(localStorage.getItem("desks")));
        return JSON.parse(localStorage.getItem("desks"));
    }
    catch {
        console.log("caught");
        return localStorage.getItem("desks");
    }
    
}

//Stores array of desk objects to local storage
export function storeDesks(deskList) {
    localStorage.setItem("desks", JSON.stringify(deskList));
    //getDesks();
}

function saveDeskPosition() {
    let currentDesks = document.getElementsByClassName("desk");
    let storedDesks = getDesks();
    console.log("positions saved");
    console.log(storedDesks);
    for (let i = 0; i < currentDesks.length; i++)
    {
        let desk = document.getElementById("desk"+i);
        console.log(desk);
    }
}

//Testing
export function clearStorage() {
    let blank = [{"deskNumber":0,"position":[0,0]}];
    localStorage.setItem("desks", JSON.stringify(blank));
}

/* Sample Desk Storage
[{"deskNumber":0,"position":[0,0]},{"position":[0,0]},{"position":[0,0]}]
*/