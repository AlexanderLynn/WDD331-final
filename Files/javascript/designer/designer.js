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
    console.log(desk);
    console.log("new desk^^");
    //Adds desk to array
    deskList.push(desk);
    storeDesks();
}

//Removes a desk from array of desks in local storage
export function removeDesk(desk) {
    
}

//Gets array of desk objects from local storage
export function getDesks() {
    try {
        console.log("tried - getting storage");
        console.log(JSON.parse(localStorage.getItem("desks")));
        return JSON.parse(localStorage.getItem("desks"));
    }
    catch {
        console.log("caught - failed getting storage");
        console.log(localStorage.getItem("desks"));
        return localStorage.getItem("desks");
    }
}

//Stores array of desk objects to local storage
export function storeDesks() {
    let currentDesks = document.getElementsByClassName("desk");
    console.log(currentDesks);
    let storedDesks = getDesks();
    storedDesks = [ {deskNumber: 0, position: [0,0]} ];
    for (let i = 0; i < currentDesks.length; i++) {
        let element = document.getElementById("desk" + i)
        let left = element.style.left;
        let top = element.style.top;
        storedDesks[i].position = [0,0];
        //storedDesks[i].position[0] = left;
        //storedDesks[i].position[1] = top;
    }
    
    localStorage.setItem("desks", JSON.stringify(storedDesks));
    //getDesks();
}


//Testing
export function clearStorage() {
    let blank = [];
    localStorage.setItem("desks", blank);
}