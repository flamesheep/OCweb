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

//測試區
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有按钮
    const buttons = document.querySelectorAll('.json-button');
  
    // 为每个按钮绑定点击事件
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const fileName = button.textContent.trim() + '.json'; // 获取按钮文字并拼接 .json
        openJsonInNewTab(fileName);
      });
    });
  
    // 在新标签页中打开 JSON 文件
    const openJsonInNewTab = (fileName) => {
      const jsonUrl = `Articles/${fileName}`; // JSON 文件路径
      const newTab = window.open('', '_blank'); // 打开新标签页
  
      // 加载 JSON 文件
      fetch(jsonUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // 在新标签页中显示 JSON 内容
          newTab.document.write(`
            <html>
              <head>
                <title>${data.title || 'JSON 内容'}</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                  }
                  h1 {
                    color: #333;
                  }
                  p {
                    color: #555;
                    line-height: 1.6;
                  }
                </style>
              </head>
              <body>
                <h1>${data.title || '未找到标题'}</h1>
                <p><strong>作者:</strong> ${data.author || '未知'}</p>
                <p><strong>日期:</strong> ${data.date || '未知'}</p>
                <p>${data.content || '未找到内容'}</p>
              </body>
            </html>
          `);
          newTab.document.close(); // 关闭文档写入
        })
        .catch(error => {
          console.error('Error loading JSON:', error);
          newTab.document.write('<p>无法加载 JSON 文件。</p>');
          newTab.document.close();
        });
    };
  });