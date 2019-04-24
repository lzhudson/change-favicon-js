const favicon = document.querySelector('link[rel="icon"]');

function changeFavIcon(){
  if(favicon.getAttribute('href') === 'img/cropped-favicon.png'){
    favicon.setAttribute('href', 'img/cropped-favicon (1).png');
  }
  else{
    favicon.setAttribute('href', 'img/cropped-favicon.png');
  }
}