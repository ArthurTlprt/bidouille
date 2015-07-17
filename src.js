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


        /*var tab = new Array();

        function initTab(tab)
        {
            for (var i = 0; i < 10; i++) {
                tab[i] = i;
                alert(tab[i]);
            }
        }

        initTab(tab);*/

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
                    if (snake[0].x == j && snake[0].y == i)
                    {
                        context.fillStyle = "#e65100";
                    } 
                    context.fillRect( j*(size+5), i*(size+5) , size, size);
                };
            };
        }

        function getDirection()
        {
            document.addEventListener('keydown', function(e) 
            {
                var key = e.keyCode;
                switch (key) {
                    case 37:
                        return "left";
                    break;

                    case 38:
                        return "up";
                    break;

                    case 39:
                        return "right";
                    break;

                    case 40:
                        return "down";
                    break;
                }
            }
            , false);
        }

        function play()
        {
                context.clearRect(0,0,1350,650);
                snake = getSnake();
                strawberry = getStrawberry();
                //key = getDirection();
                //console.log(key);
                drawTheGame();
                setTimeout(play, 1000);
        }

        var snake = getSnake();
        var strawberry = getStrawberry();
        //var key = getDirection();
        play();
        

}