function progress(){
  var progress = document.querySelector('.progress');
  var count = 0;
  var per = 0;
  var loading = setInterval(animate, 10);
  function animate(){
    if(count == 100){
      clearInterval(loading);
    }else{
      per = per + 4;
      count = count + 1;
      progress.style.width = per + 'px';
    }
  }
}
progress();
