document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.href;
  
  // 判斷螢幕寬度，假設手機為螢幕寬度小於 768px
  if (window.innerWidth < 768 && !currentUrl.includes("/m/")) {
    // 若裝置為手機且網址中不包含 "/m/"，則跳轉到手機版
    window.location.href = "http://flamesheep.github.io/OCweb/NY/m/";
  } else if (window.innerWidth >= 768 && currentUrl.includes("/m/")) {
    // 若裝置為電腦且網址中包含 "/m/"，則跳轉到桌面版
    window.location.href = "http://flamesheep.github.io/OCweb/NY";
  }
});
