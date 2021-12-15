var slider1 = document.getElementById("joint1");
var output1 = document.getElementById("val1");
output1.innerHTML = slider1.value;

var slider2 = document.getElementById("joint2");
var output2 = document.getElementById("val2");
output2.innerHTML = slider2.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
}



var canvas = document.getElementById('myCanvas');
canvas.width  = window.innerHeight*0.8;
canvas.height = window.innerHeight*0.8;
console.log(window.innerHeight, window.innerWidth);
// if (window.innerHeight >= window.innerWidth){
// 	canvas.width  = window.innerWidth;
// 	canvas.height = window.innerWidth*0.5;	
// 	console.log(canvas.height, canvas.width);
// }
var ctx = canvas.getContext('2d');
var x0 = 100, y0 = canvas.height*0.8, length = 200, dlt = -2;

var angle1 = slider1.value;
var angle2 = slider2.value;

var x1 = x0 + length * Math.cos(angle1),
    y1 = y0 + length * Math.sin(angle1);
(function animate() {
    
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
 
	slider1 = document.getElementById("joint1");
	angle1 = slider1.value;
	slider2 = document.getElementById("joint2");
	angle2 = slider2.value;
    lineToAngle(ctx, x0, y0, length, angle1, angle2);
    // console.log(a);
    ctx.lineWidth = 40;
    ctx.strokeStyle = '#04DA0E';
    ctx.stroke();
    ctx.closePath();
	// ctx.beginPath();
	// ctx.arc(x0, y0, 30, 0, 2 * Math.PI);
	// ctx.fillStyle = '#3369ff';
	// ctx.fill();  
	// ctx.closePath();
	// ctx.beginPath();
	// ctx.arc(x1, y1, 30, 0, 2 * Math.PI);
	// ctx.fillStyle = '#3369ff';
	// ctx.fill();  
	// ctx.closePath();
    DrawCircle(ctx, x0, y0);
    DrawCircle(ctx, x1, y1);
    // angle += dlt;
    // if (angle < -90 || angle > 0) dlt = -dlt;
    
    requestAnimationFrame(animate);
})();

function lineToAngle(ctx, x0, y0, length, angle1, angle2) {

    angle1 *= Math.PI / 180;
    angle1 = -angle1;
    
    x1 = x0 + length * Math.cos(angle1),
    y1 = y0 + length * Math.sin(angle1);
    
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);


    angle2 *= Math.PI / 180;
    angle2 = -angle2+angle1;
    
    x2 = x1 + length * Math.cos(angle2),
    y2 = y1 + length * Math.sin(angle2); 	
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);  

    return {x: x1, y: y1};
}

function DrawCircle(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#3369ff';
    ctx.fill();  
    ctx.closePath();    
}