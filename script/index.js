let isVisible = false;
function toggleNavbar() {
  const tog = document.querySelector(".menu-links");
  if (!isVisible) {
    tog.classList.remove("left-[-100%]");
    tog.classList.add("left-0");
    console.log("opening");
    isVisible = true;
  } else {
    tog.classList.remove("left-0");
    tog.classList.add("left-[-100%]");
    console.log("closing");
    isVisible = false;
  }
}

function closeNavBarOnLinkClick() {
  const tog = document.querySelector(".menu-links");
  if (tog.classList.contains("left-0")) {
    tog.classList.remove("left-0");
    tog.classList.add("left-[-100%]");
    console.log("closing");
    isVisible = false;
  }
}
