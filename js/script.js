$(function (){
    //loading incs
    $("#navbar").load("../inc/nav.html");

    //slideshow
    // let slide_index = 0;
    // slideshow();

    // function slideshow(){
    //     let i;
    //     let slides = document.getElementsByClassName("slide_img");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";  
    //     }
    //     slide_index++;
    //     if (slide_index > slides.length) {slide_index = 1}
    //     slides[slide_index-1].style.display = "block"; 
    //     setTimeout(slideshow, 2300);
    // }
});

// function nightMode(){
//     document.body.classList.toggle("nightMode");
//     document.getElementById("navbar").classList.toggle("nightMode");

//     if(document.getElementById("nightToggle").innerHTML.trim() === "☽"){ //if night
//         document.getElementById("nightToggle").innerHTML = "&#9788;"; //switch to day
//     } else {
//         document.getElementById("nightToggle").innerHTML = "&#9789;"; //switch to night
//     }
// }