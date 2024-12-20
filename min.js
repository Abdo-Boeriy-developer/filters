let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let Brightness = document.getElementById("Brightness");
let saSepiaturate = document.getElementById("Sepia");
let GrayScale = document.getElementById("GrayScale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hueRotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let rest = document.getElementById("rest");
let imgBox = document.querySelector(".box_img");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function restValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  Brightness.value = "100";
  saSepiaturate.value = "0";
  GrayScale.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  rest.style.display = "none";
  imgBox.style.display = "none";
};

upload.onchange = function () {
  restValue();
  download.style.display = "block";
  rest.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.hight = img.hight;
    ctx.drwImage(img, 0, 0, canvas.width, canvas, hight);
    img.style.display = "none";
  };
};

let filters = document.querySelectorAll("ul li input");

filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
        saturate(${saturate.value}%) 
        contrast(${contrast.value}%)
        Brightness(${Brightness.value}%) 
        Sepia(${Sepia.value}%)
        GrayScale(${GrayScale.value}) 


        `;
    ctx.drwImage(img, 0, 0, canvas.width, canvas, hight);
  });
});

// dwonload

download.onclick = function () {
  download.href = canvas.toDataURL("image/gbej");
};
