document.addEventListener("DOMContentLoaded", () => {
    fetch("Articles/index.json")
        .then(response => response.json())
        .then(fileList => {
            const container = document.getElementById("articles");

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
