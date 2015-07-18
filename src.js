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




        function debug(tab)
        {
            for (var i = 0; i < snake.length; i++) { 
                console.log("snake["+ i +"].x = " + snake[i].x);
                console.log("snake["+ i +"].y = " + snake[i].y);
            }
        }

        function getRandomArbitrary(min, max) 
        {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function getStrawberry()
        {
            var strawberry = { x : 0, y : 0};

            //Faire 
            do
            {
                strawberry.x = getRandomArbitrary(0, width);
                strawberry.y = getRandomArbitrary(0, height);
                /*alert(strawberry.x);
                alert(strawberry.y);*/
            }while(snake[0].x == strawberry.x && snake[0].y == strawberry.y);

            return strawberry;
        }

        function getSnake()
        {
            var snake = new Array( {x : 0, y : 0} );
            snake[0].x = getRandomArbitrary(0, width);
            snake[0].y = getRandomArbitrary(0, height);

            /*alert(snake[0].x);
            alert(snake[0].y);*/
            return snake;
        }

        /*
        dessine le plateau de jeux
        prend en parametre :
        le tableau formant le snake
        + la fraise
        */
        function drawTheGame()
        {
            var size = 40;

            for (var i = 0; i < height; i++) {

                for (var j = 0; j < width; j++) {

                    if (strawberry.x == j && strawberry.y == i) 
                    {
                        context.fillStyle = "#76ff03";
                    } 
                    else
                    {
                        context.fillStyle = "rgba(0, 0, 255, 0.5)";
                    };
                    for(var k = 0; k < snake.length; k++)
                    {
                        if (snake[k].x == j && snake[k].y == i)
                        {
                            context.fillStyle = "#e65100";
                            k = snake.length;
                        } 
                    }
                    context.fillRect( j*(size+5), i*(size+5) , size, size);
                };
            };
        }

        function getDirection()
        {
            return document.addEventListener('keydown', function(e) 
            {
                key = e.keyCode;
            }
            , false);
        }

        function ondulation()
        {
            if(snake.length > 1)
            {
                for(var i = snake.length-1; i > 0; i--)
                {
                    snake[i].x = snake[i-1].x;
                    snake[i].y = snake[i-1].y;
                    //need to be completed
                }
            }
        }

        function move()
        {
            //clavier
            getDirection();
            //on fait bouger tout le corps
            ondulation();
            //bouge dans la direction
            switch (key) {
                case 37:

                    //return 'left';
                    snake[0].x -= 1;
                    //bouge tout le corps
                    //ondulation();
                    console.log("x" + snake[0].x);
                break;

                case 38:

                    //return 'up';
                    snake[0].y -= 1;
                    
                    //bouge tout le corps
                    //ondulation();

                    console.log("y" + snake[0].y);
                break;

                case 39:
                    //return 'right';
                    snake[0].x += 1;
                    //bouge tout le corps
                    //ondulation();
                    console.log("x" + snake[0].x);
                break;

                case 40:
                    //return 'down';
                    snake[0].y += 1;
                    //bouge tout le corps
                    //ondulation();
                    console.log("y" + snake[0].y);
                break;
                }

                //thorique
                if (snake[0].x == -1) {
                        snake[0].x = width;
                }
                else if (snake[0].y == -1) {
                        snake[0].y = height;
                }
                else if (snake[0].x == width) {
                        snake[0].x = 0;
                }
                else if (snake[0].y == height) {
                        snake[0].y = 0;
                };

                //si mangé, on agrandit
                if(eaten == true)
                {
                    snake[snake.length] = { x : strawberry.x , y : strawberry.y };
                    eaten = false;
                    //On initialise une autre strawberry
                    strawberry = getStrawberry();      
                }


        }

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
                setTimeout(play, 500);
        }

        var snake = getSnake();
        var strawberry = getStrawberry();
        var key;
        var eaten = false;
        getDirection();
        play();
}