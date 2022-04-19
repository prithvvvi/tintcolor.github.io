function preload() {
}

    function setup() {
    canvas=createCanvas(800,600);
    canvas.position(120,250);
    video=createCapture(VIDEO);
        video.hide();
        tint_color="";
    }
    
    function draw() {
        image(video,0,0,800,600);
        tint(tint_color);
    }
function filter_tint(){
tint_color=document.getElementById("color_filter").value;
}
function take_snapshot(){
    save('tint_color_image.png');
}