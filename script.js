const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const needle = document.getElementById("needle");


function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300)
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

let isAlive = setInterval(() => {
    // get current dino Y position
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left"));

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 100) {
        // collision
        if(!alert('Oh no! You got deported!')){window.location.reload();}
        //if($('#myModal').modal('show')){window.location.reload();}
        //alert("DEPORTED")
    }

}, getRandomNumber(10, 50));

document.addEventListener("click", function (event) {
    jump();
})

const cats = [
    './img/binchickenA.png',
    './img/binchickenB.png'
  ]
  
  const node = document.getElementById("dino");
  
  const cycleImages = (images, container, step) => {
      images.forEach((image, index) => (
      setTimeout(() => {
          container.style.backgroundImage = `url(${image})`  
      }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
  }
  
  cycleImages(cats, node, 50)