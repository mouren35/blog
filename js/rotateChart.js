let timer = null;
let lArrow, rArrow, imgWraper, imgList, nowImg;

function init() {
  lArrow = document.querySelector("main article.rotateChart .lArrow");
  rArrow = document.querySelector("main article.rotateChart .rArrow");
  imgWraper = document.querySelector("main article.rotateChart section");
  imgList = imgWraper.children;
  nowImg = 0;
  for (let i = 1; i < imgList.length; ++i) {
    imgList[i].style.opacity = 0;
  }
}

function clearAutoRotate() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function startAutoRotate() {
  clearAutoRotate();
  timer = setInterval(function () {
    let next = (nowImg + 1) % imgList.length;
    changeImgTo(nowImg, next);
    nowImg = next;
  }, 2000);
}

function resetRotate(changingImg, next) {
  for (let i = 0; i < imgList.length; ++i) imgList[i].style.display = "none";
  imgList[changingImg].style.display = "block";
  imgList[next].style.display = "block";
  startAutoRotate();
}

function changeImgTo(changingImg, next) {
  let opacity = 1;
  resetRotate(changingImg, next);
  let fadeTimer = setInterval(function () {
    if (opacity > 0) opacity -= 0.01;
    else {
      clearInterval(fadeTimer);
    }
    imgList[changingImg].style.opacity = opacity;
    imgList[next].style.opacity = 1 - opacity;
  }, 10);
}

function exec() {
  init();
  lArrow.addEventListener("click", function () {
    let changingImg = nowImg;
    let next = (nowImg - 1 + imgList.length) % imgList.length;
    nowImg = next;
    changeImgTo(changingImg, next);
  });
  rArrow.addEventListener("click", function () {
    let changingImg = nowImg;
    let next = (nowImg + 1) % imgList.length;
    nowImg = next;
    changeImgTo(changingImg, next);
  });
  resetRotate(0, 1);
}

$(window).ready(exec);
