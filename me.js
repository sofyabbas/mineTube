
// get the div element
const myDiv = document.querySelector('#showMenu');
const sideNav = document.querySelector('#sideNav');
let visb = false;
// add a click event listener to the div
myDiv.addEventListener('click', function () {

    if (visb = true) {
        alert(visb);

        //sideNav.style.display="none";
        sideNav.style.opacity = "0";
        sideNav.style.left = "-500px";
        visb = false;
        alert(visb);
        // sideNav.pointer-events = "none";

    } else {
        alert(visb);
        sideNav.style.opacity = "100";
        sideNav.style.left = "500px";

    }
});
