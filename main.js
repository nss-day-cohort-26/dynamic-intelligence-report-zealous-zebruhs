const loadRap = document.querySelector("#rap");

loadRap.addEventListener("click", () => {populateRapSheet(rapSheetObj)});

const loadNews = document.querySelector("#news");

loadNews.addEventListener("click", () => {populateNews(newsfeed)});

document.querySelector("#financial").addEventListener("click", financialPageFunc);
loadSummary();

document.querySelector("#travel").addEventListener("click", travelListBuilder);

document.querySelector("#summary").addEventListener("click", loadSummary);
