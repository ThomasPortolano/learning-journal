import { articleArray } from './data.js'

function getFeatureItem(){
    let featureHtml = ''

   articleArray.forEach((article) => {
        if (article.type === 'feature'){
            featureHtml += `
            <article class="feature" id="${article.id}">
                    <div class="date">${article.date}</div>
                    <h1 class="title">${article.title}</h1>
                    <div class="summary">${article.summary}</div>
                </article>`
            }})
        return featureHtml}

function getArticleItem(){
    let articleHtml = ''

    articleArray.forEach((article) => {
        if (article.type === 'article'){
            articleHtml += `
        <article class="sub" id="${article.id}">
                    <img class="image" src="${article.image} alt="${article.alt}">
                    <div class="date">${article.date}</div>
                    <h2 class="title">${article.title}</h2>
                    <div class="summary">${article.summary}</div>
                </article>
                `}
    })

    return articleHtml
}

function renderArticles(){
    document.getElementById('article-feed').innerHTML = getArticleItem()
}

function renderFeature(){
    document.getElementById('feature-feed').innerHTML = getFeatureItem()
}

renderFeature()
renderArticles()

