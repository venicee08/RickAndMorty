var request = new XMLHttpRequest();
request.open('GET', "https://api.sampleapis.com/rickandmorty/characters");

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  var title ='';

  for(i = 0; i<2; i++){
    var images = parsedData[i].image;
    title += `<div class="card">
    <img src = ${images} class = "cartoon_image">
    <a class="index-main-charac-name">${parsedData[i].name}</a>
    </div>`
  }
  document.getElementById('cards').innerHTML = title;
}
request.send();
