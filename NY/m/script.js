document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.href;

  // 只有在必要時才跳轉，避免不必要的執行
  if (window.innerWidth < 768 && !currentUrl.includes("/m/")) {
    window.location.href = "http://flamesheep.github.io/OCweb/NY/m/";
  } else if (window.innerWidth >= 768 && currentUrl.includes("/m/")) {
    window.location.href = "http://flamesheep.github.io/OCweb/NY";
  }
});
