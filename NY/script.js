document.addEventListener("DOMContentLoaded", function() {
  // 判斷螢幕寬度，假設手機為螢幕寬度小於 768px
  if (window.innerWidth < 768) {
    // 裝置為手機，導向B網址
    window.location.href = "http://flamesheep.github.io/OCweb/NY/m/";
  } else {
    // 裝置為電腦，導向A網址
    window.location.href = "http://flamesheep.github.io/OCweb/NY";
  }
});
