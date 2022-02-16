'use strict'

var gCanvas
var gCtx
var gFontSize = 20

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
      drawText(getMeme().lines[0].txt, 200, 100)
    };
    img.src =`${gCurrImg.url}`;
    
}


function drawText(txt, x, y) {
  const fillColor = document.querySelector('[name=color]').value
    gCtx.fillStyle = fillColor;
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black';
    gCtx.font = `${gFontSize}px impact`;;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
  }

  function onImgSelect(imgId) {
    updateSelectedImgId(imgId)
    setImg(imgId)
    renderMeme()
}

function openColorPalette() {
  var elColorPallete = document.querySelector('.color-pallete')
  console.log(elColorPallete)
  elColorPallete.classList.toggle('hide')
 
}

function increaseFont() {
  gFontSize+= 5
  console.log(gFontSize)
  renderMeme() 
}


function decreaseFont() {
  gFontSize-= 5
  renderMeme() 
}