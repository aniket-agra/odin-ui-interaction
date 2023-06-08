function createSlider() {
  let bodyElem = document.querySelector("body");
  let imagesDiv = document.createElement("div");
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
  bodyElem.appendChild(imagesDiv);
}

export {createSlider};