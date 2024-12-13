// Functionize Minecraft Fishing Start Code
let img = document.getElementById("result-img");
let cod = document.getElementById("num-cod");
let sam = document.getElementById("num-salmon");
let trop = document.getElementById("num-tropical");
let puf = document.getElementById("num-puffer");
let numCod = 0;
let numSam = 0;
let numTro = 0;
let numPuf = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  let charName = document.getElementById("character-select");
  if (charName === "steve") {
    //seve fish sim

    let randNum = Math.random();
    console.log(randNum);
    document.getElementById("character-img").style.border = "2px solid red";
    if (randNum < 0.7) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      cod.innerHTML = numCod;
    } else if (randNum <= 0.9) {
      console.log("salmon");
      img.src = "img/Raw-Salmon.png";
      numSam++;
      sam.innerHTML = numSam;
    } else if (randNum < 0.95) {
      console.log("tropical");
      img.src = "img/Tropical-Fish.png";
      numTro++;
      trop.innerHTML = numTro;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuf++;
      puf.innerHTML = numPuf;
    }
  }
  //
  //
  //
  else if (charName === "alex") {
    //ALEX

    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      cod.innerHTML = numCod;
    } else if (randNum <= 0.2) {
      console.log("salmon");
      img.src = "img/Raw-Salmon.png";
      numSam++;
      sam.innerHTML = numSam;
    } else if (randNum < 0.5) {
      console.log("tropical");
      img.src = "img/Tropical-Fish.png";
      numTro++;
      trop.innerHTML = numTro;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuf++;
      puf.innerHTML = numPuf;
    }
  }
  //
  //
  //
  else {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.5) {
      console.log("salmon");
      img.src = "img/Raw-Salmon.png";
      numSam++;
      sam.innerHTML = numSam;
    } else if (randNum < 0.75) {
      console.log("tropical");
      img.src = "img/Tropical-Fish.png";
      numTro++;
      trop.innerHTML = numTro;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuf++;
      puf.innerHTML = numPuf;
    }
  }
}
