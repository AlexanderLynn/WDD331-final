class Desk {
    constructor(deskNumber) {
        this.deskNumber = deskNumber;
    }
    getDeskNumber() {
        return this.deskNumber();
    }
}

function getNextDesk() {
    return 11;
}

function addDesk() {
    let nextDesk = "desk" + getNextDesk();
    let desk = new Desk(nextDesk);
    console.log(desk);
    setDesktoStorage(desk);
}

function getDeskStorage() {
    console.log(localStorage.getItem("desk"));
}

function setDesktoStorage(desk) {
    toStore = JSON.stringify(desk);
    localStorage.setItem("desk", toStore);
}