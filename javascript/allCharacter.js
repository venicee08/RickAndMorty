var request = new XMLHttpRequest();
request.open('GET', "https://api.sampleapis.com/rickandmorty/characters");

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  var title ='';

  for(var i = 0; i<parsedData.length ; i++){
    if(i<2){
      continue
    }
    var images = parsedData[i].image;
    title += `<div class="card">
    <a class="mainC-name">${parsedData[i].name}</a>
    <a class="mainC-status">Status: ${parsedData[i].status}</a>
    <a class="mainC-species">Species: ${parsedData[i].species}</a>
    <a class="mainC-species">Type: ${parsedData[i].type}</a>
    <a class="mainC-species">Gender: ${parsedData[i].gender}</a>
    <a class="mainC-origin">Origin: ${parsedData[i].origin}</a>
    <img src = ${images} class = "cartoon_image">
    </div>`
  }

  document.getElementById('cards').innerHTML = title;
  }
request.send();
