'use strict'

var gCanvas
var gCtx

function init() {
  gCanvas = document.getElementById('my-canvas')
  gCtx = gCanvas.getContext('2d')
  renderMeme()

}

function renderMeme() {
    drawImg()
    drawText(txt, x, y)
    


}

function drawImg() {
    var img = new Image();
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    };
    img.src ='images/1.jpg';
}


function drawText(txt, x, y) {
    // gCtx.fillText(text, x, y);
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '20px impact';
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
  }