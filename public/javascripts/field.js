window.onload = function()
{
  var canvas = document.getElementById('mon_canvas');
  if(!canvas)
  {
      alert("Impossible de récupérer le canvas");
      return;
  }

  var context = canvas.getContext('2d');
  if(!context)
  {
      alert("Impossible de récupérer le context du canvas");
      return;
  }

  function play(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    m_electron.update();
    m_electron.display(context, canvas);
    setTimeout(play, 10);
  }
  m_electron = new Particule(100, 100, 1, -1, '#da3c2b');
  play();

}
