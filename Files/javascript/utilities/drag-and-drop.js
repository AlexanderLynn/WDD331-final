
let loadFile = function(event) {
    //localStorage.setItem("background", event.target.files[0]);
    //document.getElementById("deskContainer").appendChild(image);

    let test = document.getElementById("deskContainer");
    test.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
    //test.src = URL.createObjectURL(event.target.files[0]);
};

