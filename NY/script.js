document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.href;

  // 只有在必要時才跳轉，避免不必要的執行
  if (window.innerWidth < 768 && !currentUrl.includes("/m/")) {
    window.location.href = "http://flamesheep.github.io/OCweb/NY/m/";
  } else if (window.innerWidth >= 768 && currentUrl.includes("/m/")) {
    window.location.href = "http://flamesheep.github.io/OCweb/NY";
  }
});

// 折疊功能
var coll = document.querySelector('.collapsible');
if (coll) {
    coll.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            content.classList.add('active');
        }
    });
}

// 標題跳轉功能
const links = document.querySelectorAll('.content h4');
links.forEach(link => {
  link.addEventListener('click', function () {
    const targetID = this.id.replace('-link', '');
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.scrollBy(0,-10);
    }
  });
});