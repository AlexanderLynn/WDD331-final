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


//Appends new desk object to arrau of desks in local storage
export function addDesk(desk) {
    //Checks if local storage already exists; Initializes if not
    let deskList;
    if (getDesks() === null || typeof getDesks() === 'undefined')
        deskList = [];
    else
        deskList = getDesks();
    
    //Adds desk to array
    deskList.push(desk);
    storeDesks(deskList);
}

//Removes a desk from array of desks in local storage
export function removeDesk(desk) {
    
}

//Gets array of desk objects from local storage
export function getDesks() {
    try {
        console.log("tried");
        console.log(JSON.parse(localStorage.getItem("desks")));
        return JSON.parse(localStorage.getItem("desks"));
    }
    catch {
        console.log("caught");
        console.log(localStorage.getItem("desks"));
        return localStorage.getItem("desks");
    }
    
}

//Stores array of desk objects to local storage
export function storeDesks(deskList) {
    localStorage.setItem("desks", JSON.stringify(deskList));
    getDesks();
}



//Testing
export function clearStorage() {
    let blank = [];
    localStorage.setItem("desks", blank);
}