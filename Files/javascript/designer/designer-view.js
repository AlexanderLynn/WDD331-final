


export function drawDesks(deskList) {
    for (let i = 0; i < deskList.length; i++) {
        drawDesk(i);
    }
}

function drawDesk(i) {
        let div = document.createElement("div");
        let deskContainer = document.getElementById("deskContainer");
        deskContainer.appendChild(div);
        div.setAttribute("class", "desk");
        div.setAttribute("id", "desk"+i);
        div.style.zIndex = 10 + i;
        //makeDraggable(div);
        window.onload = $(".desk").draggable({containment: "parent"});
}

//Legacy Dragging
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