'use strict'

var gCanvas
var gCtx
var gFontSize = 20
var gFillColor = '#ffffff'
var gCurrLineFocus = 0


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
      drawText(getLineText(0), 200, 50)
      drawText(getLineText(1), 200, 450)
  };
  img.src = `${gCurrImg.url}`;

}


function drawText(txt, x, y) { 
  gCtx.fillStyle = gFillColor;
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
  gFontSize += 5
  console.log(gFontSize)
  renderMeme()
}


function decreaseFont() {
  gFontSize -= 5
  renderMeme()
}

function changeFillColor() {
  const fillColor = document.querySelector('[name=color]').value
  gFillColor = fillColor
  renderMeme()
}


function switchLine() {
  if (gCurrLineFocus === 0) {
    gCurrLineFocus = 1
  }
  else {
    gCurrLineFocus = 0
}

}

function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  elLink.href = data
  elLink.download = 'My-Meme.png'
}

