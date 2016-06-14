window.onload = function()
{
  var canvas = initCanvas(document);
  var context = initContext(document);


  /**
   * Le but est de simuler les forces de coulombs
   * entre des charges oposées
   */


  m_electron = new Particule(400, 400, 0.1, -0.1, '#da3c2b', 0.5);
  m_proton = new Particule(200, 200, 1, 1, '#526eae', -0.5);

  var particules = [m_electron, m_proton];


  var forces = [{x: 0, y: 0}];

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
