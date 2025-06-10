// Melissa Duanmu mduanmu@u.rochester.edu
// Last modified: 21 Feb 2025
// CSC210_Proj0 script.js

function nightMode(){
    document.body.classList.toggle("nightMode");
    document.getElementById("navbar").classList.toggle("nightMode");

    if(document.getElementById("nightToggle").innerHTML.trim() === "☽"){ //if night
        document.getElementById("nightToggle").innerHTML = "&#9788;"; //switch to day
    } else {
        document.getElementById("nightToggle").innerHTML = "&#9789;"; //switch to night
    }
}