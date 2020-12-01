$(document).ready(load_news);


function load_news() {

  // news marquee
  let data = news["news"];
  let html = "";
  let template = $("#news-item-template").html();
  let html_maker = new htmlMaker(template);
  html = html_maker.getHTML(data);
  $("#news").html(html);


  // add news information
  let news_detail = news.news[0];
  let html_news_detail = "";
  let news_detail_template = $("#news-detail-template").html();
  let detail_html_maker = new htmlMaker(news_detail_template);
  html_news_detail = detail_html_maker.getHTML(news_detail);
  $("#detail").html(html_news_detail);


}


// play/pause=start/stop marquee
function toggle(image) {

  if (image.getAttribute('src') == "data/pause.png") {

    image.setAttribute('src', 'data/play.png');
    document.getElementById("news").setAttribute("class", "marquee_paused");
  } else {

    image.setAttribute('src', 'data/pause.png');
    document.getElementById("news").setAttribute("class", "marquee");
  }
}

function selectionOption(option) {
  let newsId = option.getAttribute("news_id");
  let news_details = news["news"][newsId - 1];
  let details_template = $("#news-detail-template").html();
  let html_maker = new htmlMaker(details_template);
  let html = html_maker.getHTML(news_details);
  $("#detail").html(html);
}