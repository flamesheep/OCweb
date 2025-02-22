document.addEventListener("DOMContentLoaded", () => {
    fetch("Articles/index.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP 錯誤！狀態碼：${response.status}`);
        }
        return response.json();
    })
    .then(fileList => {
        const container = document.getElementById("article-container");
        if (!container) {
            throw new Error("找不到 ID 為 article-container 的元素");
        }

            fileList.files.forEach(file => {
                fetch(file)
                    .then(response => response.json())
                    .then(data => {
                        data.articles.forEach(article => {
                            const articleDiv = document.createElement("div");
                            articleDiv.classList.add("article");

                            const title = document.createElement("h2");
                            title.textContent = article.title;
                            title.addEventListener("click", () => {
                                content.style.display = content.style.display === "none" ? "block" : "none";
                            });

                            const date = document.createElement("p");
                            date.textContent = `日期：${article.date}`;
                            date.classList.add("tags");

                            const tags = document.createElement("p");
                            tags.textContent = `標籤：${article.tags.join(", ")}`;
                            tags.classList.add("tags");

                            const content = document.createElement("p");
                            content.textContent = article.content;
                            content.style.display = "none";

                            articleDiv.appendChild(title);
                            articleDiv.appendChild(date);
                            articleDiv.appendChild(tags);
                            articleDiv.appendChild(content);
                            container.appendChild(articleDiv);
                        });
                    })
                    .catch(error => console.error(`載入 ${file} 失敗：`, error));
            });
        })
        .catch(error => console.error("載入文章列表失敗：", error));
});
