document.addEventListener("DOMContentLoaded", function() {
    // 判斷螢幕寬度，假設手機為螢幕寬度小於 768px
    if (window.innerWidth < 768) {
      // 如果當前頁面不是手機版網址，則導向手機版
      if (window.location.href !== "http://flamesheep.github.io/OCweb/NY/m/") {
        window.location.href = "http://flamesheep.github.io/OCweb/NY/m/";
      }
    } else {
      // 如果當前頁面是手機版網址，則導向電腦版
      if (window.location.href === "http://flamesheep.github.io/OCweb/NY/m/") {
        window.location.href = "http://flamesheep.github.io/OCweb/NY";
      }
    }
  });