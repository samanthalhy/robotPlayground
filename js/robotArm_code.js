$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.h2Div').toggleClass('active');
    });
});
var sliderScale = document.getElementById("scale");
var outputScale = document.getElementById("scaleVal");
outputScale.innerHTML = sliderScale.value;

sliderScale.oninput = function() {
    outputScale.innerHTML = this.value;
    scaling(this.value/100);
}

var sliderDOF = document.getElementById("dof");
var outputDOF = document.getElementById("dofVAl");
outputDOF.innerHTML = sliderDOF.value;
var dof = sliderDOF.value;

sliderDOF.oninput = function() {
    outputDOF.innerHTML = this.value;
    extraSliderAdd(this.value);
}

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

/////////Extra Slider//////
var div = document.getElementById('extraSlider');
var form = document.createElement('form');
var extraSlider = [];
var input = [];
var value = [];
var angleVal = [];
function extraSliderAdd(dof){

    extraSlider = [];
    input = [];
    value = [];    
    angleVal = [];
    form.innerHTML = "";
    div.innerHTML = "";
    for (let i = 0; i < (dof-2); i++) {
        input[i] = document.createElement('input');
        input[i].setAttribute('class', 'slider');
        input[i].setAttribute('type', 'range');
        input[i].setAttribute('min', 0);
        input[i].setAttribute('max', 360);
        input[i].setAttribute('step', 1);
        input[i].setAttribute('value', 0);

        extraSlider[i] = input[i];

        value[i] = document.createElement('p');
        value[i].setAttribute('id', 'sliderValue');
        var number = i+3;
        value[i].innerHTML = "Joint " +number+ ": " + input[i].value +" degree";
        angleVal[i] = input[i].value;
 
        div.appendChild(value[i]);
        div.appendChild(input[i]);

    }
    for (let i = 0; i < (dof-2); i++) {
        input[i].oninput = function() {
        var number = i+3;
        value[i].innerHTML = "Joint " +number+ ": " + input[i].value +" degree";
        angleVal[i] = input[i].value;
        }  
    }
}


/////CANVAS//////////
var canvas = document.getElementById('myCanvas');
canvas.width  = window.innerHeight*0.8;
canvas.height = window.innerHeight*0.8;
console.log(window.innerHeight, window.innerWidth);

var ctx = canvas.getContext('2d');
var x0 = canvas.width/2, y0 = canvas.height/2, length = 200;
var lineWidthSet = 40;
var circleRadius = 30;

var angle1 = -slider1.value* Math.PI / 180;
var angle2 = -slider2.value* Math.PI / 180 + angle1;

var x1 = x0 + length * Math.cos(angle1),
    y1 = y0 + length * Math.sin(angle1);
var x2 = x1 + length * Math.cos(angle2),
    y2 = y1 + length * Math.sin(angle2);    
var extraX = [];
var extraY = [];
(function animate() {
    var ctx = canvas.getContext('2d');
    //clear all
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    slider1 = document.getElementById("joint1");
    angle1 = -slider1.value* Math.PI / 180;
    slider2 = document.getElementById("joint2");
    angle2 = -slider2.value* Math.PI / 180 + angle1;

    canvas.width  = window.innerHeight;
    canvas.height = window.innerHeight;    
    x0 = canvas.width/2;
    y0 = canvas.height/2;    
    ctx.beginPath();

    lineToAngle(ctx, x0, y0, length, angle1, angle2);
    extraLine(ctx, x2, y2, length, angle1, angle2);

    ctx.lineWidth = lineWidthSet;
    ctx.strokeStyle = '#04DA0E';
    ctx.stroke();
    ctx.closePath();

    DrawCircle(ctx, x0, y0);
    DrawCircle(ctx, x1, y1);

    if (angleVal.length>=1){
        DrawCircle(ctx, x2, y2); 
    }
    
    for (let i = 0; i < (extraX.length-1); i++) {
        DrawCircle(ctx, extraX[i], extraY[i]);
    }
    
    requestAnimationFrame(animate);
})();

function scaling(scale){
    length = 200*scale;
    lineWidthSet = 40*scale;
    circleRadius = 30*scale;      
}

function lineToAngle(ctx, x0, y0, length, angle1, angle2) {
   
    x1 = x0 + length * Math.cos(angle1),
    y1 = y0 + length * Math.sin(angle1);
    
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    
    x2 = x1 + length * Math.cos(angle2),
    y2 = y1 + length * Math.sin(angle2); 	
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);  

    return {x: x1, y: y1};
}

function DrawCircle(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#3369ff';
    ctx.fill();  
    ctx.closePath();    
}

function extraLine(ctx, x, y, length, angle1, angle2) {
    var x_prev, y_prev;
    x_prev = x;
    y_prev = y;
    var anglePi = [];
    var angleTotal = [];
    extraX = [];
    extraY = [];
    angleTotal = angle2; 

    for (let i = 0; i < angleVal.length; i++) {
        anglePi[i] = -angleVal[i] * Math.PI / 180;
        anglePi[i] = anglePi[i] + angleTotal;        
        angleTotal = anglePi[i];
        
        x_temp = x_prev + length * Math.cos(anglePi[i]),
        y_temp = y_prev + length * Math.sin(anglePi[i]);    
        ctx.moveTo(x_prev, y_prev);
        ctx.lineTo(x_temp, y_temp); 
        x_prev = x_temp;
        y_prev = y_temp;        
        extraX[i] = x_temp;
        extraY[i] = y_temp;
    }

}