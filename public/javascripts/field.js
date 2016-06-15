window.onload = function()
{
  var canvas = initCanvas(document);
  var context = initContext(document);


  /**
   * Le but est de simuler les forces de coulombs
   * entre des charges oposées
   */


  var particules = [
    new Particule(500, 500, 0.01, -0.01, '#da3c2b', 0.5),
    new Particule(400, 500, 0.01, -0.01, '#da3c2b', 0.5),
    new Particule(500, 400, 0.01, -0.01, '#526eae', -0.5),
    new Particule(200, 200, 0.02, 0.02, '#526eae', -0.5)
  ];


  function main(){

    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(var i in particules){
      particules[i].update(particules);
      particules[i].display(context, canvas);
    }


    setTimeout(main, 15);
  }

  $("body").mousemove(function(e) {
    var mouse_x = e.pageX;
    var mouse_y = e.pageY;
  })

  main();

}
