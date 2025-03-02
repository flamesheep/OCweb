document.addEventListener('DOMContentLoaded', () => {
  // 獲取所有按鈕
  const buttons = document.querySelectorAll('.article-title');

  // 為每個按鈕綁定點擊事件
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const fileName = button.textContent.trim() + '.json'; // 获取按钮文字并拼接 .json
      loadJsonAndUpdatePage(fileName);
    });
  });

  const loadJsonAndUpdatePage = (fileName) => {
    const jsonUrl = `Articles/${fileName}`; // JSON 文件路径

    // 加載JSON文件
    fetch(jsonUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // 获取当前页面的 DOM 元素
        const header = document.querySelector('.content h1');
        const tag = document.querySelector('.content .tag');
        const contentContainer = document.querySelector('.content');

        // 填充 JSON 数据到页面中
        if (header) header.textContent = data.title || '未找到標題';
        if (tag) tag.textContent = data.tag || '未找到標籤';

        // 将 content 按换行符分割成数组，并用 <p> 标签包裹每段内容
        if (contentContainer) {
          const paragraphs = data.content.split('～');
          const htmlContent = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
          contentContainer.innerHTML = htmlContent; // 将段落内容插入到 .content 中
        }
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
        document.querySelector('.content').innerHTML = '<p>無法加載 JSON 文件。</p>';
      });
  };
});