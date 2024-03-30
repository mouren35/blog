let timers = [];
function init() {
  lArrow = document.querySelector("main article.rotateChart div.lArrow");
  rArrow = document.querySelector("main article.rotateChart div.rArrow");
  imgWraper = document.querySelector("main article.rotateChart section");
  imgList = imgWraper.children;
  nowImg = 0;
  for (let i = 1; i < imgList.length; ++i) {
    imgList[i].style.opacity = 0;
  }
}
function resetRotate(changingImg, next) {
  //细节，防止连击乱闪，强行重置，停止其他
  for (each of timers) clearInterval(each);
  timers = [];
  for (i = 0; i < imgList.length; ++i) imgList[i].style.display = "none";
  imgList[changingImg].style.display = "block";
  imgList[next].style.display = "block";

  let timer = setInterval(function () {
    let next = (nowImg + 1) % imgList.length;
    changeImgTo(nowImg, next);
    nowImg = next;
  }, 2000);
  timers.push(timer);
}
function changeImgTo(changingImg, next) {
  let opacity = 1;
  resetRotate(changingImg, next);
  let timer = setInterval(function () {
    if (opacity > 0) opacity -= 0.01;
    else {
      clearInterval(timer);
    }
    imgList[changingImg].style.opacity = opacity;
    imgList[next].style.opacity = 1 - opacity;
  }, 10);
  timers.push(timer);
}
function exec() {
  init();
  lArrow.addEventListener("click", function () {
    let changingImg = nowImg;
    let next = (nowImg - 1) % imgList.length;
    if (next == -1)
      //边界判断，不要是负数
      next = imgList.length - 1;
    nowImg = next;
    changeImgTo(changingImg, next); //利用JS机制
    nowImg = next;
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
