function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(300, 300);
    canvas.position(550,140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
    }
}
function draw() {
    background('#969A97');
}