function createSlider() {
  let bodyElem = document.querySelector("body");
  let container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "9rem";
  container.style.left = "calc(2rem + 224px)";
  container.style.minWidth = "calc(2rem + 228px)";
  container.style.minHeight = "calc(2rem + 228px)";
  container.style.border = "2px solid green";
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
  imagesDiv.style.position = "absolute";
  imagesDiv.style.top = "1rem";
  container.appendChild(imagesDiv);
  bodyElem.appendChild(container);
}

export {createSlider};