function Home(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop";
}
function Apps(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\programs";
}
function Games(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\games";
}

let titleState = false;

var titleInteral = window.setInterval(function(){
  if(titleState){
    document.getElementById("title").innerHTML = "";
    titleState = false;
  }
  else{
    document.getElementById("title").innerHTML = "Antek's store";
    titleState = true;
  }
}, 1000);