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

        //responsive
        canvas.width = screen.width;
        canvas.height = screen.height;


        //global 
        var size = 50;
        var width = Math.floor(canvas.width / (size +5) ),
        height = Math.floor(canvas.height / (size +5) );
        var key;

         function getDirection()
        {
            return document.addEventListener('keydown', function(e) 
            {
                key = e.keyCode;
            }
            , false);
        }

        
        function play()
        {
            context.clearRect(0,0,canvas.width,canvas.height);    //je réinitialise le canvas
            getDirection();
            mySnake.key = key;
            myLayer.eaten = mySnake.move(myLayer.eaten, myLayer.strawberry);
            if(myLayer.eaten == true)
            {
                myLayer.initStrawberry(mySnake.tail);

            }
            if(mySnake.tail[mySnake.tail.length-1].x == myLayer.strawberry.x && mySnake.tail[mySnake.tail.length-1].y == myLayer.strawberry.y)
            {
                //On agrandit la taille du snake
                myLayer.eaten = true;
            }
            myLayer.drawTheGame(mySnake.tail ,context);
            mySnake.debug();
            if (!mySnake.isDead()) {
                setTimeout(play, 150);
            };
        }

        var mySnake = new Snake(width, height);
        mySnake.initTail();
        var myLayer = new Layer(width, height, size);
        myLayer.initStrawberry(mySnake.tail);
        myLayer.eaten = false;
        
        //mySnake.getDirection();
        play();
}