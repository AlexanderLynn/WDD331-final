
export function drawDesks(deskList) {
    //clears view and draws desks
    clearView();
    for (let i = 1; i < deskList.length + 1; i++) {
        drawDesk(deskList, i);
    }
    //getPhoto();
}

function drawDesk(deskList, i) {
    //creates desk div with class and id
    let div = document.createElement("div");
    let deskContainer = document.getElementById("deskContainer");
    deskContainer.appendChild(div);
    div.setAttribute("class", "desk");
    div.setAttribute("id", "desk"+i);
    div.innerHTML = "<a href='#desk"+i+"'>"+i+"</a>";
    //assigns z-index and previous position
    div.style.zIndex = 10 + i;
    div.style.left = deskList[i-1].position[0];
    div.style.top = deskList[i-1].position[1];
    //makeDraggable(div);
    //makes item draggable with JQuery
    if(document.getElementById("deskContainer").classList.contains("designing"))
        $(".desk").draggable({containment: "parent"});
}

function clearView() {
    let container = document.getElementById("deskContainer");
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

export function toggleManagement() {
    let password = "admin";
    if (document.getElementById("designer-menu").classList.contains("hidden")){
        let passChecker = prompt("Please enter the admin password (default = admin)");
        if (passChecker == password)
            document.getElementById("designer-menu").classList.toggle("hidden");
        else {}
    }
    else
        document.getElementById("designer-menu").classList.toggle("hidden");

}


//broken
function getPhoto() {
    let image = document.getElementById('output');
	image.src = URL.createObjectURL(document.getElementById("file").files[0]);
    document.getElementById("deskContainer").appendChild(image);
}

/*
function makeDraggable(desk) {
    let dragItem = desk;
    let container = document.querySelector(".desk-layout");

    let active = false;
    let currentX;
    let currentY;
    let initX;
    let initY;
    let xOffset = 0;
    let yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initX;
          currentY = e.touches[0].clientY - initY;
        } else {
          currentX = e.clientX - initX;
          currentY = e.clientY - initY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function dragStart(e) {
      if (e.type === "touchstart") {
        initX = e.touches[0].clientX - xOffset;
        initY = e.touches[0].clientY - yOffset;
      } else {
        initX = e.clientX - xOffset;
        initY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initX = currentX;
      initY = currentY;

      active = false;
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
}
*/