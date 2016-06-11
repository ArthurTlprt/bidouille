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
    m_electron.update();
    m_electron.display(context, canvas);
    setTimeout(play, 20);
  }

  m_electron = new Particule(100, 100, 5, 2, '#da3c2b');
  m_electron.display(context, canvas);
  play();

}
