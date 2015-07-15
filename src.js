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


        var width = 60;

        for (var i = 0; i < 5; i++) {

            for (var j = 0; j < 10; j++) {

                context.fillStyle = "rgba(0, 0, 255, 0.5)";
                context.fillRect( j*(width+5), i*(width+5) , width, width);
                

            };
        };
}