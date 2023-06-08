function colorButton() {
  document.querySelectorAll(".jumpBtn").forEach(e => {
    e.style.scale = "1";
    e.style.backgroundColor = "white";
  })
  let displayedImage = document.querySelector(".container").dataset.image;
  let displayedBtn = document.querySelector(`.jumpBtn[data-image="${displayedImage}"]`);
  displayedBtn.style.backgroundColor = "grey";
  displayedBtn.style.scale = "1.2";
}

function previous() {
  let imagesDiv = document.querySelector(".images");
  let container = document.querySelector(".container");
  let displayedImage = Number(container.dataset.image);
  displayedImage -= 1;
  while (displayedImage < 0) 
    displayedImage += 10;
  displayedImage %= 10;
  imagesDiv.style.left = `calc(-${displayedImage} * (2rem + 228px))`;
  container.dataset.image = displayedImage;
  colorButton();
}

function next() {
  let imagesDiv = document.querySelector(".images");
  let container = document.querySelector(".container");
  let displayedImage = Number(container.dataset.image);
  displayedImage = (displayedImage + 1) % 10;
  imagesDiv.style.left = `calc(-${displayedImage} * (2rem + 228px))`;
  container.dataset.image = displayedImage;
  colorButton();
}

function jumpToImage(e) {
  let displayedImage = e.target.dataset.image;
  let imagesDiv = document.querySelector(".images");
  let container = document.querySelector(".container");
  imagesDiv.style.left = `calc(-${displayedImage} * (2rem + 228px))`;
  container.dataset.image = displayedImage;
  colorButton();
}

function createSlider() {
  let bodyElem = document.querySelector("body");
  let container = document.createElement("div");
  container.classList.add("container");
  container.style.position = "absolute";
  container.style.top = "9rem";
  container.style.left = "calc(2rem + 224px)";
  container.style.minWidth = "calc(2rem + 228px)";
  container.style.minHeight = "calc(2rem + 228px)";
  container.style.border = "2px solid green";
  let imagesDiv = document.createElement("div");
  imagesDiv.classList.add("images");
  imagesDiv.style.display = "flex";
  for (let i = 0; i < 10; i++) {
    let imgElem = document.createElement("img");
    imgElem.setAttribute("alt", `img${i}`);
    imgElem.setAttribute("src", "");
    imgElem.style.marginRight = "1rem";
    imgElem.style.marginLeft = "1rem";
    imgElem.style.minHeight = "224px";
    imgElem.style.minWidth = "224px";
    imgElem.style.border = "2px solid red";
    imagesDiv.appendChild(imgElem);
  }
  imagesDiv.style.position = "absolute";
  imagesDiv.style.top = "1rem";
  container.appendChild(imagesDiv);
  container.setAttribute("data-image", "0");
  bodyElem.appendChild(container);
  let btnDiv = document.createElement("div");
  btnDiv.style.display = "flex";
  btnDiv.style.justifyContent = "space-around";
  let prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.addEventListener("click", previous);
  let nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.addEventListener("click", next);
  let jumpDiv = document.createElement("div");
  jumpDiv.classList.add("jump");
  jumpDiv.style.position = "absolute";
  jumpDiv.style.top = "calc(11rem + 250px)";
  jumpDiv.style.left = "40%";
  jumpDiv.style.display = "flex";
  jumpDiv.style.justifyContent = "space-around";
  for (let i = 0; i < 10; i++) {
    let jumpBtn = document.createElement("button");
    jumpBtn.classList.add("jumpBtn");
    jumpBtn.setAttribute("data-image", `${i}`);
    jumpBtn.addEventListener("click", jumpToImage);
    jumpBtn.style.color = "white";
    jumpBtn.style.borderRadius = "50%";
    jumpBtn.style.border = "2px solid black";
    jumpBtn.style.backgroundColor = "white";
    jumpBtn.style.marginRight = "0.5rem";
    jumpBtn.style.minHeight = "1rem";
    jumpDiv.appendChild(jumpBtn);
  }
  btnDiv.appendChild(prevBtn);
  btnDiv.appendChild(nextBtn);
  bodyElem.appendChild(btnDiv);
  bodyElem.appendChild(jumpDiv);
  colorButton();
}

export {createSlider};