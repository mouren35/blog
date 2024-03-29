addLoadEvent(one);
addLoadEvent(two);
addLoadEvent(three);
addLoadEvent(four);

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    //如果window.onload里面没有函数，就添加一个进去
    // console.log("只执行一次，第一个添加进队列的函数");
    window.onload = func;
    // console.log("第一个添加进队列的函数，添加完成！！！！");
  } else {
    //如果window.onload里面有函数了，就把其他的函数添加进去
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

// function one() {
//   //吸顶灯
//   var nav = document.querySelector("nav");
//   var navTop = nav.offsetTop;
//   // console.log(navTop);

//   var backTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (backTop >= navTop) {
//     nav.style.position = "fixed";
//     nav.style.top = "0";
//     nav.style.left = "0";
//     nav.style.zIndex = "100";
//   } else {
//     nav.style.position = "";
//   }
// }

function two() {
  //返回顶部
  var totop = document.getElementById("bnt");
  var timer = null;

  totop.onclick = function () {
    timer = setInterval(function () {
      var backtop = document.documentElement.scrollTop || document.body.scrollTop;
      // 越滚越慢
      var speedTop = backtop / 5;
      document.documentElement.scrollTop = backtop - speedTop;
      if (backtop == 0) {
        clearInterval(timer);
      }
    }, 30);
  };
}

// $(window).ready(function()
// {
// 	totop();
// 	light();
// });
