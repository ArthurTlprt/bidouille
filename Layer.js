function Layer(width, height, size)
{
	//global
	this.size = size;
    this.width = width;
    this.height = height;

    this.strawberry;
    this.eaten;

    //here i go
    this.getRandomArbitrary = function(min, max) 
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    this.initStrawberry = function(tail)
    {
        this.strawberry = { x : 0, y : 0};

        //Faire 
        do
        {
            this.strawberry.x = getRandomArbitrary(0, this.width);
            this.strawberry.y = getRandomArbitrary(0, this.height);

        }while(tail[0].x == this.strawberry.x && tail[0].y == this.strawberry.y);
    }

    /*
    dessine le plateau de jeux
    prend en parametre :
    le tableau formant le tail
    + la fraise
    */
    function drawTheGame(tail)
    {

        for (var i = 0; i < this.height; i++) {

            for (var j = 0; j < this.width; j++) {

                if (this.strawberry.x == j && this.strawberry.y == i) 
                {
                    context.fillStyle = "#76ff03";
                } 
                else
                {
                    context.fillStyle = "rgba(0, 0, 255, 0.5)";
                };
                for(var k = 0; k < tail.length; k++)
                {
                    if (tail[k].x == j && tail[k].y == i)
                    {
                        context.fillStyle = "#e65100";
                        k = tail.length;
                    } 
                }
                context.fillRect( j*(size+5), i*(size+5) , size, size);
            };
        };
    }

}