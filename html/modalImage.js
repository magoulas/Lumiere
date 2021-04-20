
// Get the modal


// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg;
var modal;



function img1Click(){
    modalImg = document.getElementById("img01");
    modal = document.getElementById('myModal1');
    modal.style.display = "block";
}
function img2Click(){
    modalImg = document.getElementById("img02");
    modal = document.getElementById('myModal2');
    modal.style.display = "block";
}
function img3Click(){
    modalImg = document.getElementById("img03");
    modal = document.getElementById('myModal3');
    modal.style.display = "block";
}
function img4Click(){
    modalImg = document.getElementById("img04");
    modal = document.getElementById('myModal4');
    modal.style.display = "block";
}
function img5Click(){
    modalImg = document.getElementById("img05");
    modal = document.getElementById('myModal5');
    modal.style.display = "block";
}
function img6Click(){
    modalImg = document.getElementById("img06");
    modal = document.getElementById('myModal6');
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
//var span = document.getElementByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
$('.close').on('click',function() { 
    modal.style.display = "none";
});


$(document).keyup(function(e) {
    if (e.keyCode === 27){
        console.log("esc")
        modal.style.display = "none";
    }   // esc
  });
