document.addEventListener('DOMContentLoaded', () => {
    // 共用跳轉函數
    const navigateToArticle = (element) => {
        const titleText = element.textContent.trim();
        const fileName = `${titleText}.html`;
        window.location.href = `Articles/${fileName}`;
    };

    // 為所有 .article-title 綁定事件
    const articleTitles = document.getElementsByClassName('article-title');
    if (articleTitles.length > 0) {
        Array.from(articleTitles).forEach((articleTitle) => {
            articleTitle.addEventListener('click', () => {
                navigateToArticle(articleTitle);
            });
        });
    } else {
        console.error('未找到 .article-title 元素');
    }
});