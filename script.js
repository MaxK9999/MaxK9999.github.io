//slide in effect for homepage
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

//makes a function that opens and closes tablinks
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//function that makes navbar open on mobile devices
var menu = document.getElementById("sidemenu");
var button = document.getElementByClassName("fa-bars");

function openmenu() {
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}

function toggleMenu() {
    if (menu.style.right === "0px") {
        closemenu();
    } else {
        openmenu();
    }
}