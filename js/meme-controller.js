'use strict'

var gCanvas
var gCtx

function init() {
  gCanvas = document.getElementById('my-canvas')
  gCtx = gCanvas.getContext('2d')
  renderMeme()
  renderGallery()

}

function renderMeme() {
    drawImg()
   
    
}

function drawImg() {
    var img = new Image();
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
      drawText(getMeme().lines[0].txt, 150, 150)
    };
    img.src =`${gCurrImg.url}`;
    
}


function drawText(txt, x, y) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '20px impact';
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
  }


