window.onload = function()
{
  var canvas = initCanvas(document);
  var context = initContext(document);


  /**
   * Le but est de simuler les forces de coulombs
   * entre des charges oposées
   */


  m_electron = new Particule(100, 100, 0.1, -0.1, '#da3c2b', -1);
  m_proton = new Particule(200, 200, 0.1, 0.1, '#526eae', 1);

  var particules = [m_electron, m_proton];


  var forces = [{x: 0, y: 0}];
  var ke = 1;

  function main(){

    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(var i in particules){
      particules[i].update(particules);
      particules[i].display(context, canvas);
    }

    setTimeout(main, 15);
  }



  main();

}
