// Bg
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0, curY = 0;
    let tgX = 0, tgY = 0;

    const bubbleWidth = interBubble.offsetWidth / 2;
    const bubbleHeight = interBubble.offsetHeight / 2;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        interBubble.style.transform = `translate(${Math.round(curX - bubbleWidth)}px, ${Math.round(curY - bubbleHeight)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});


// Popup
let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function openPopup() {
    popup.classList.add("open-popup");
    overlay.classList.add("show-overlay");
    return false;
}

function closePopup() {
    popup.classList.remove("open-popup");
    overlay.classList.remove("show-overlay");
}


// Mobile nav
function showNav() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-button").getElementsByTagName('img')[0];
    console.log("## ", menuIcon);
    if (menu.style.height === "0px") {
        menu.style.height = '175px';
        menuIcon.src = "Slike/Icon/cross.svg";
    } else {
        menu.style.height = '0px';
        menuIcon.src = "Slike/Icon/burger.svg";
    }
}

// Nav scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScrollY = window.scrollY;
});
