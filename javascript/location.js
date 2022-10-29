var request = new XMLHttpRequest();
request.open('GET', 'https://api.sampleapis.com/rickandmorty/locations');

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  var item ='';
  for(i = 0; i<parsedData.length; i++){
    item += `<div class="card">
    <a class="mainC-name"> ${parsedData[i].name}</a>
    <a class="mainC-status">Type: ${parsedData[i].type} </a>
    <a class="mainC-species">Dimension: ${parsedData[i].dimension} </a>
    </div>`
  }
  document.getElementById('locations').innerHTML = item;
}
request.send();
