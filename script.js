const canvas = document.getElementById('canvasPaint');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
let currentColor ;
canvas.height = 500;
// ctx.strokeStyle = 'red';
// ctx.lineWidth = '19'

function clearScreen(){
    ctx.fillStyle = " White";
    ctx.fillRect(0,0,window.innerWidth,500);
}

function changeColor(color){
    currentColor = color.value;
    ctx.strokeStyle = currentColor;
}

function changeWidth(width){
    ctx.lineWidth = width.value;
}

function paint(flag){
    $("#canvasPaint").mousedown(function(event){
        ctx.beginPath();
    $("#canvasPaint").mousemove(function(event){
        ctx.lineTo(event.pageX,event.pageY);
        console.log(event.pageX,event.pageY)
        if(flag == 'false'){
            ctx.strokeStyle = 'white'
        }
        ctx.stroke();
    })
    
    })
    $("#canvasPaint").mouseup(function(event){
        $("#canvasPaint").unbind("mousemove");
        flag = 'true'
    })
}
