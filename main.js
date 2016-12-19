(function(){
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var isDrawing = false;
    var lastX = 0;
    var lastY = 0;
    var hue = 0;
    var direction = true;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "#bada55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 1;


    function draw(e) {
        if(!isDrawing) return;
        ctx.strokeStyle = "hsl("+ hue + ", 100%, 50%)";
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
        hue++;
        if(hue >= 360) {
            hue = 0;
        }
        if(ctx.lineWidth >= 110 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        if(direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }

    }

    canvas.addEventListener('mousemove', draw, false);
    canvas.addEventListener('mousedown', function(e) {
        return new Object(isDrawing = true,
                lastX = e.offsetX,
                lastY = e.offsetY
        );
    }, false);
    canvas.addEventListener('mouseup', function() {
        return isDrawing = false;
    }, false);
    canvas.addEventListener('mouseout', function() {
        return isDrawing = false;
    }, false);

})();

