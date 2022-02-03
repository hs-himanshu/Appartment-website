const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");
//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//counter
let counter = 1;
const size = images[0].clientWidth;
slide.style.transform = "translateX(" + -size * counter + "px)";
//button listeners
nextBtn.addEventListener("click", () => {
    if (counter >= images.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + -size * counter + "px)";
});
slide.addEventListener("transitionend", () => {
    if (images[counter].id === "lastClone") {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (images[counter].id === "firstClone") {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = "translateX(" + -size * counter + "px)";
    }
});

//floor plan btn
function btn() {
    let image = document.getElementById("flr-img");
    let images = [
        "images/floorplan.jpeg",
        "images/floorplan1.jpeg",
        "images/floorplan2.jpeg",
        "images/floorplan3.jpeg",
        "images/floorplan4.jpeg",
        "images/floorplan5.jpeg",
    ];
    let random = Math.floor(Math.random() * 6);
    image.src = images[random];
}
