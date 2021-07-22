//Desk object
export default class Desk {
    constructor(deskNumber, position = [0,0], reserved = 0, reservationName = "") {
        this.deskNumber = deskNumber;
        this.position = position;
        this.reserved = reserved;
        this.reservationName = reservationName;
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
    //Sets new desk number to deskcount + 1
    let halfWidth = document.getElementById("deskContainer").clientWidth / 2;
    let halfHeight = document.getElementById("deskContainer").clientHeight / 2;
    let desk = new Desk(getDesks().length + 1, [halfWidth, halfHeight]);
    //Checks if local storage already exists; Initializes if not
    let deskList;
    if (getDesks() === null || typeof getDesks() === 'undefined')
        deskList = [];
    else
        deskList = getDesks();
    
    //Adds desk to array
    deskList.push(desk);
    saveDeskPosition(deskList);
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

export function saveDeskPosition(deskList) {
    let currentDesks = document.getElementsByClassName("desk");
    let storedDesks = deskList;
    //logs current position for each desk
    for (let i = 1; i < currentDesks.length + 1; i++)
    {
        let desk = document.getElementById("desk"+i);
        //console.log(desk.style.left + ", " + desk.style.top);
        storedDesks[i-1].position[0] = desk.style.left;
        storedDesks[i-1].position[1] = desk.style.top;
    }
    storeDesks(storedDesks);
}

export function clearStorage() {
    let halfWidth = document.getElementById("deskContainer").clientWidth / 2;
    let halfHeight = document.getElementById("deskContainer").clientHeight / 2;
    let blank = [{"deskNumber":1,"position":[halfWidth,halfHeight],"reserved":0,"reservationName":""}];
    localStorage.setItem("desks", JSON.stringify(blank));
}

export function reserveDesk() {
        //gets selected desk number
        let deskList = getDesks();
        let desk = (window.location.href).toString()
        let numPos = desk.indexOf("desk");
        let numLength = desk.length;
        let justDesk = desk.substring(numPos, numLength);
        //updates reservation and saves to storage
        try {
            if (deskList[parseInt(justDesk.slice(4))-1].reservationName == "" || deskList[parseInt(justDesk.slice(4))-1].reservationName != document.getElementById("reservers-name").value) {
                deskList[parseInt(justDesk.slice(4))-1].reservationName = document.getElementById("reservers-name").value;
                deskList[parseInt(justDesk.slice(4))-1].reserved = 1;
                confirm("Now reserved for: " + document.getElementById("reservers-name").value)
            }
            else 
                confirm("Already reserved for " + document.getElementById("reservers-name").value);
        }
        catch {
            confirm("Please select a desk before reserving");
        }
        
        
        document.getElementById("reservers-name").value = "";
        storeDesks(deskList);
}

/* Sample Desk Storage
[{"deskNumber":0,"position":[0,0]},{"position":[0,0]},{"position":[0,0]}]
*/