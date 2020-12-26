//'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ddc3f4b022c05741a0fb9bfdee578807'

  var good = false;
  var txt = "";
  var test = 'https://api.openweathermap.org/data/2.5/weather?zip=17019&appid=ddc3f4b022c05741a0fb9bfdee578807';
  var firstHalf = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  var secondHalf = '&appid=ddc3f4b022c05741a0fb9bfdee578807';

  while(good == false){
    var zip = prompt("Please enter your Zip Code", "18301");
    if(zip == null){
      alert("Invalid Entry");
    }
    else if(zip.length < 5 || zip.length > 5){
      alert("Invalid Entry");
    }
    else {

    good = true;
      fetch(firstHalf+zip+secondHalf)
       .then(response => response.json())
        .then(data => {
          var myObj = JSON.stringify(data);
          myObj = JSON.parse(myObj);

          if(myObj.weather == null){
            alert("Invalid Entry");
            location.reload();
          }

         var textnode = document.createTextNode(myObj.name);
         document.getElementById("city").appendChild(textnode);
         textnode = document.createTextNode(myObj.weather[0].description);
         document.getElementById("desc").appendChild(textnode);
         textnode = document.createTextNode(myObj.main.temp);
         document.getElementById("temp").appendChild(textnode);
         textnode = document.createTextNode(myObj.main.humidity);
         document.getElementById("humi").appendChild(textnode);
         textnode = document.createTextNode(myObj.wind.speed);
         document.getElementById("wind").appendChild(textnode);
         textnode = document.createTextNode(myObj.clouds.all);
         document.getElementById("clou").appendChild(textnode);
         //console.log(data);
       });
     }
}
