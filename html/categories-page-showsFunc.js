






function toggleFilters1(btnId) {


    var btnText = document.getElementById(btnId).innerText;
    var text = document.getElementById("GENRE").innerHTML = "GENRE: " + btnText + " " + "<img class='mini' src='ic_arrow_drop_down_white_24px.png'>";



}


function toggleFilters2(btnId) {


    var btnText = document.getElementById(btnId).innerText;
    var text = document.getElementById("BY").innerHTML = "BY: " + btnText + " " + "<img class='mini' src='ic_arrow_drop_down_white_24px.png'>";



}


function toggleFilters3(btnId) {


    var btnText = document.getElementById(btnId).innerText;
    var text = document.getElementById("LANGUAGE").innerHTML = "LANGUAGE: " + btnText + " " + "<img class='mini' src='ic_arrow_drop_down_white_24px.png'>";
}
function toggleFilters4(btnId) {
    var btnText = document.getElementById(btnId).innerText;
    var text = document.getElementById("YEAR").innerHTML = "YEAR: " + btnText + " " + "<img class='mini' src='ic_arrow_drop_down_white_24px.png'>";



}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function myf(btnId, here) {
    var btnText = document.getElementById(btnId).innerText;
    var text = document.getElementById(here).innerHTML = btnText
    console.log(here);
}
