let count = 0;
const alienImage = document.getElementById("alienImage");
const counterDisplay = document.getElementById("counter");
const miaoDisplay = document.getElementById("miao");
const scareSound = new Audio('pop.mp3');
const heart = document.getElementById("heart");

function clickAlien() {
    count++;
    counterDisplay.childNodes[0].nodeValue = count + " ";
    scareSound.play();

    // Show the heart briefly
    heart.classList.add("visible");

    // Apply spooky animation effect
    alienImage.classList.add("scare");
    miaoDisplay.classList.add("miao-scare");

    // Hide the heart after 300ms
    setTimeout(() => {
        heart.classList.remove("visible");
        alienImage.classList.remove("scare");
        miaoDisplay.classList.remove("miao-scare");
    }, 300); // Delay to show spooky effect
}
