import { articleArray } from './data.js'

function getFeatureItem(){
    let featureHtml = ''

   articleArray.forEach((article) => {
        if (article.type === 'feature'){
            featureHtml += `
            <article class="feature" id="${article.id}">
                <div class="feature-content">
                    <div class="date">${article.date}</div>
                    <h1 class="title">${article.title}</h1>
                    <div class="summary">${article.summary}</div>
                </div>
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
                </article>`
                }
})
    return articleHtml
}

function renderArticles(){
    const articleContainer = document.getElementById('article-feed');
    if (articleContainer) {
        articleContainer.innerHTML = getArticleItem();
    }
}

function renderFeature(){
    const featureContainer = document.getElementById('feature-feed');
    if (featureContainer) {
        featureContainer.innerHTML = getFeatureItem();
    }
}

renderFeature()
renderArticles()
