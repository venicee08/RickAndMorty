var request = new XMLHttpRequest();
request.open('GET', "https://api.sampleapis.com/rickandmorty/episodes");

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  var s1 ='';
  var s2 = '';
    for(i = 0; i<parsedData.length; i++){
      if(parsedData[i].season == "1"){
        s1 += `<div class="card">
        <a class="episode-name">${parsedData[i].name}</a>
        <a class="episode-date">${parsedData[i].air_date}</a>
        <a class="episode-no">Episode: ${parsedData[i].episode}</a>
        </div>`
      }
  }

  for(i = 0; i<parsedData.length; i++){
    if(parsedData[i].season == "2"){
      s2 += `<div class="card">
      <a class="episode-name">${parsedData[i].name}</a>
      <a class="episode-date">${parsedData[i].air_date}</a>
      <a class="episode-no">Episode: ${parsedData[i].episode}</a>
      </div>`
    }
}
  document.getElementById('S1').innerHTML = s1;
  document.getElementById('S2').innerHTML = s2;
}
request.send();
