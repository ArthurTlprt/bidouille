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


        //here i go


        /*
        dessine le plateau de jeux
        prend en parametre :
        le tableau formant le snake
        + la fraise
        */
        function drawTheGame()
        {
            var width = 40;

            for (var i = 0; i < 50; i++) {

                for (var j = 0; j < 50; j++) {

                    context.fillStyle = "rgba(0, 0, 255, 0.5)";
                    context.fillRect( j*(width+5), i*(width+5) , width, width);
                    

                };
            };
        }

        drawTheGame();
}