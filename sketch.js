let canvas1;
let canvas2;
var colPic; 
let chk1;
var letter;

//var t = 'G';

function setup() {
  
  
canvas1= createCanvas(800, 800, P2D);
canvas1.background(0,0);
canvas1.position(300,20);
frameRate(25);

  
//   letter = createGraphics(width,height);
  
//   letter.background(255);
//   letter.textSize(width*0.7);
//   letter.textAlign(LEFT,TOP);
//   letter.text(t,250,180);
  
  
let g = createP('M O N O T Y P E ');
g.style('font-size', '24px');
g.position(70, 42);
g.style('color', '#000000');
  

let g1 = createP('B R E W E R ');
g1.style('font-size', '24px');
g1.position(70, 74);
g1.style('cvar', '#ffffff');
  

    
let g2 = createP('Made with p5.js');
g2.style('font-size', '16px');
g2.position(70, 740);
g2.style('color', '#828080');
  
  
  
let g3 = createP('© Indhu Kanth 2022');
g3.style('font-size', '16px');
g3.position(70, 760);
g3.style('color', '#828080');

  
  
// Letter Input field  
let a = createP('I N P U T :');
a.style('font-size', '18px');
a.position(70, 152);
a.style('color', '#000000');
input = createInput().attribute('maxlength', 1);
input.position(158, 162);
input.style('font-size', '20px');
input.size(60,30)  
  
  
  
  
let b = createP('F L O W - F I E L D');
b.style('font-size', '16px');
b.position(75, 232);
b.style('color', '#000000');
wSlider = createSlider(0,25,1);
wSlider.position(70,283)
wSlider.style("width","180px")
wSlider.addClass("mySliders");
  

// Height Input field  
let c = createP('T U R B U L A N C E ');
c.style('font-size', '16px');
c.position(75, 334);
c.style('color', '#000000');
hSlider = createSlider(1,20,1);
hSlider.position(70,380)
hSlider.style("width","180px")
hSlider.addClass("mySliders");
 
  
  // Particle Input field  
let e = createP('S P A R S E N E S S');
e.style('font-size', '16px');
e.position(75, 434);
e.style('color', '#000000');
eSlider = createSlider(5,35,1);
eSlider.position(70,480)
eSlider.style("width","180px")
eSlider.addClass("mySliders");
 

  
  
let d = createP('C O L O R');
d.style('font-size', '16px');
d.position(75, 524); 
d.style('color', '#000000');
colPic = createColorPicker("black");   
colPic.position(70, 576);
colPic.style("width","180px")
colPic.addClass("mySliders");
  
  
button = createButton("S A V E");
button.style('font-size', '14px');
button.style('background-color', '#3476F6');
  button.style('color', '#ffffff');

button.position(70, 682);
button.size(70,32)
button.mousePressed(savename);

  
  
chk1 = createCheckbox(' S T O P', false);
chk1.style('font-size', '16px');
chk1.position(70, 640);
chk1.style('color', '#000000');
chk1.changed(mycheck);
  
}

function draw() {
  
  background(255);
  let t=input.value();
  letter = createGraphics(width,height);
  
  letter.background(255);
  letter.textSize(width*0.7);
  letter.textAlign(LEFT,TOP);
  letter.text(t,250,180);
  
  var startX = 240;
  var startY = 198;
  var w = letter.textWidth(t);
  var h = height*0.7;
  
  var droplets = eSlider.value();

  
        fill(colPic.value())
  for(var y=startY; y<startY+h; y+=droplets){
    for(var x=startX; x<startX+w; x+=droplets){
      var c = letter.get(x,y);
      if(brightness(c)<2){
        var off = frameCount * 0.1 + (x*y)*hSlider.value()/10;
        var dx = x + sin(off)*droplets*hSlider.value()/10;
        var dy = y + hSlider.value()/(tan(off))*droplets*wSlider.value()/10;
        var dz=sin(noise((dy+2)/(1-dx)));
        //ellipse(dx/dy,dy,20,20);
        textSize(14);
      text(t,dx-2,dy+5);
               //text(t,dx/(dz*2),dy/(dz*2));


      }
    }
  }
}

function mycheck() 
{
  if(chk1.checked())
    {
 noLoop();  
    }
else
  {
    loop();
  }

}

function savename(){


  save( "Brew" + frameCount+ ".jpg")  
  

}

