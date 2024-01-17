import { articleArray } from './data.js'

function getArticleItem(){
    let articleHtml = ''

    articleArray.forEach((article) => {
        articleHtml += `
        <article class="sub" id="${article.id}">
                    <img class="image" src="${article.image} alt="${article.alt}">
                    <div class="date">${article.date}</div>
                    <h2 class="title">${article.title}</h2>
                    <div class="summary">${article.summary}</div>
                </article>
                `
    })

    return articleHtml
}

function renderArticles(){
    document.getElementById('article-feed').innerHTML = getArticleItem()
}

renderArticles()
