let isVisible = false;
function toggleNavbar() {
  const menuBtn = document.querySelector(".menu-btn");
  const tog = document.querySelector(".menu-links");
  if (!isVisible) {
    tog.classList.remove("left-[-100%]");
    tog.classList.add("left-0");
    menuBtn.classList.add("menu-open");
    console.log("opening");
    isVisible = true;
  } else {
    tog.classList.remove("left-0");
    tog.classList.add("left-[-100%]");
    menuBtn.classList.remove("menu-open");
    console.log("closing");
    isVisible = false;
  }
}

function closeNavBarOnLinkClick() {
  const menuBtn = document.querySelector(".menu-btn");
  const tog = document.querySelector(".menu-links");
  if (tog.classList.contains("left-0")) {
    tog.classList.remove("left-0");
    tog.classList.add("left-[-100%]");
    menuBtn.classList.remove("menu-open");
    console.log("closing");
    isVisible = false;
  }
}
