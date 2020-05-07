
import React  from 'react';
import { Slide } from "presa";

import P5Wrapper from 'react-p5-wrapper';

function sketch(p) {
    let canvas;
    var string = "N"; //words to be displayed intially
    const size = 300; //font size
    const fontFile = "Muli-Black.ttf";
    const showText = true; //whether or not to have an overlay of the original text (in the background color)
    const textAlpha = 0.1; //the alpha of the text if displayed (low value will make it slowly fade in)
    const backgroundColor = 0; //kinda self-explanatory
    const strokeAlpha = 100; //the alpha of the lines (lower numbers are more transparent)
    const strokeColor = (150,10,10); //the line color


    const fontSampleFactor = 0.5; //How many points there are: the higher the number, the closer together they are (more detail)

    const noiseZoom = 0.006; //how zoomed in the perlin noise is
    const noiseOctaves = 4; //The number of octaves for the noise
    const noiseFalloff = 0.5; //The falloff for the noise layers

    const zOffsetChange = 0; //How much the noise field changes in the z direction each frame
    const individualZOffset = 0; //how far away the points/lines are from each other in the z noise axies (the bigger the number, the more chaotic)

    const lineSpeed = 1; //the maximum amount each point can move each frame

    const newPointsCount = 9; //the number of new points added when the mouse is dragged

    var seed;
    var font;
    var points = [];
    var startingPoints;

    p.preload = function preload() {
        font = p.loadFont(fontFile);
    };

    p.setup = function () {
        const container = document.querySelector('#some-id-h-intro');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.textFont(font);
        p.fill(backgroundColor, textAlpha);
        p.stroke(150,10,10, strokeAlpha);
        p.noiseDetail(noiseOctaves, noiseFalloff);
        seed = p.floor(p.random(1000000));

        start();
    };

    function start(){
        p.background(backgroundColor);
        p.textSize(size);

        p.randomSeed(seed);
        p.noiseSeed(seed);
        p.frameCount = 0;
        startingPoints = font.textToPoints(string, p.width / 2 - p.textWidth(string) / 2, p.height / 2, size, {"sampleFactor": fontSampleFactor});

        points = [];
        for (let point = 0; point < startingPoints.length; point++) {
            points[point] = startingPoints[point];
            points[point].zOffset = p.random();
        }
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        if(showText){
            p.noStroke();
            p.text(string, p.width / 2 - p.textWidth(string) / 2, p.height / 2);
            p.stroke(strokeColor, strokeAlpha);
        }
        for (let pt = 0; pt < points.length; pt++) {
            let point = points[pt];
            let noiseX = point.x * noiseZoom;
            let noiseY = point.y * noiseZoom;
            let noiseZ = p.frameCount * zOffsetChange + point.zOffset*individualZOffset;
            let newPX = point.x + p.map(p.noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
            let newPY = point.y + p.map(p.noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
            p.line(point.x, point.y, newPX, newPY);
            p.stroke(150,10,10);
            point.x = newPX;
            point.y = newPY;
        }
    };

    p.keyPressed = function keyPressed() {
        if (p.keyIsDown(p.CONTROL) && p.key.toLowerCase() === 's') {
            p.save();
        }else if (p.keyCode === p.BACKSPACE || p.keyCode === p.DELETE){
            string = string.substring(0, string.length-1);
            start();
        }else if(p.keyCode === p.RETURN){
            seed = p.floor(p.random(1000000));
            start();
        }else if (p.keyCode === 32 || p.keyCode >= 186 || (p.keyCode >= 48 && p.keyCode <= 90)){
            string += p.key;
            start();
        }
    }

    p.mouseDragged = function mouseDragged() {
        for (let i = 0; i < newPointsCount; i++) {
            let angle = p.random(p.TAU);
            let magnitude = p.randomGaussian() * ((newPointsCount-1)*0.5*3);
            let newPoint = {
                "x": p.mouseX + magnitude * p.cos(angle),
                "y": p.mouseY + magnitude * p.sin(angle),
                "zOffset": p.random()
            };
            points[points.length] = newPoint;
            startingPoints[startingPoints.length] = newPoint;
        }
    }

};

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-h-intro'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}



