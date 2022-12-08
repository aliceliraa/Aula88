var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;
    canvas.addEventListener("mousedown", my_mousedown);



//Adicione o código MouseDown aqui
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    mouseEvent = "mousedown";
}

//Adicione aqui o MouseUp
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

//Add Mouseleave
canvas.addEventListener("mouseleave" , myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}

//Add MouseMove
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posicao das coordenadas x e y");
        console.log("x =" + lastPositionOfX + "y =" + lastPositionOfY);
        ctx.moveTo(lastPositionOfX , lastPositionOfY);

        console.log("Posicao atual das coordenadas x e y");
        console.log("x =" + currentPositionOfX + "y =" + currentPositionOfY);
        ctx.lineTo(currentPositionOfMouseX , currentPositionOfMouseY);
        ctx.stroke();
    }

    lastPositionOfX = currentPositionOfMouseX;
    lastPositionOfY = currentPositionOfMouseY;
}






//Atividade Adicional
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
