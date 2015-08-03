function Layer(width, height, size, space, color)
{
	//global
	this.size = size;
    this.width = width;
    this.height = height;
    this.space = space;
    this.color = color;

    this.timeMax = 550;
    this.timeMin = 30;

    this.strawberry;
    this.eaten;
    this.poop = new Array();

    //here i go
    this.interval = function(n)
    {
        n-=1;
        var time = this.timeMax * Math.exp(-0.5*n) + this.timeMin;
        console.log("interval = "+time);
        return time;
    }

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
            this.strawberry.x = this.getRandomArbitrary(0, this.width);
            this.strawberry.y = this.getRandomArbitrary(0, this.height);

        }while(tail[0].x == this.strawberry.x && tail[0].y == this.strawberry.y);
        this.eaten = false;
    }

    /*
    dessine le plateau de jeux
    prend en parametre :
    le tableau formant le tail
    + la fraise
    */
    this.drawTheGame = function(tail, context)
    {

        for (var i = 0; i < this.height; i++) {

            for (var j = 0; j < this.width; j++) {

                if (this.strawberry.x == j && this.strawberry.y == i) 
                {
                    context.fillStyle = this.color.strawberry;
                } 
                else
                {
                    context.fillStyle = this.color.font;
                };
                for (var k = 0; k < this.poop.length; k++) {
                    if (this.poop[k].x == j && this.poop[k].y == i) {
                        context.fillStyle = this.color.poop;
                    };
                };
                for(var k = 0; k < tail.length; k++)
                {
                    if (tail[k].x == j && tail[k].y == i)
                    {
                        context.fillStyle = this.color.snake;
                        k = tail.length;
                    } 
                }
                context.fillRect( j*(this.size+space), i*(this.size+space) , this.size, this.size);
            };
        };
    }

}