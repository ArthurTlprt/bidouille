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

        //global 
        var width = 29,
        height = 13;

        //here i go
        
        function play()
        {
                context.clearRect(0,0,1350,650);    //je réinitialise le canvas
                //snake = getSnake();
                //strawberry = getStrawberry();
                move();
                //console.log(key);
                if(snake[snake.length-1].x == strawberry.x && snake[snake.length-1].y == strawberry.y)
                {
                    //On agrandit la taille du snake
                    eaten = true;
                }
                drawTheGame();
                debug();
                setTimeout(play, 200);
        }

        var snake = getSnake();
        var strawberry = getStrawberry();
        var key;
        var eaten = false;
        getDirection();
        play();
}