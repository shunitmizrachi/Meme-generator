'use strict'

var gCanvas
var gCtx
var gFontSize = 20
var gFillColor = '#ffffff'
var gCurrLineFocus = 0;
var gFontFamily


function init() {
  renderGallery()
  gCanvas = document.getElementById('my-canvas')
  gCtx = gCanvas.getContext('2d')
    renderMeme()
}


function renderMeme() {
  drawImg()


}

function drawImg() {
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    if (gMeme.lines[0].align === 'left') drawText(getLineText(0), 50, 50)
    else if (gMeme.lines[0].align === 'right') drawText(getLineText(0), 350, 50)
    else drawText(getLineText(0), 200, 50)
    if (gMeme.lines[1].align === 'left') drawText(getLineText(0), 50, 450)
    else if (gMeme.lines[1].align === 'right') drawText(getLineText(0), 350, 450)
    else drawText(getLineText(1), 200, 450)
      
  };
  img.src = `${gCurrImg.url}`;

}


function drawText(txt, x, y) { 
  gCtx.lineWidth = 1;
  gCtx.strokeStyle = 'black';
  if (y === 50) {
  gCtx.font = `${gMeme.lines[0].size}px ${gMeme.lines[0].fontFamily}`;
  gCtx.fillStyle = gMeme.lines[0].color;
  } else {
    gCtx.font = `${gMeme.lines[1].size}px ${gMeme.lines[1].fontFamily}`;
    gCtx.fillStyle = gMeme.lines[1].color;
  }
  gCtx.fillText(txt, x, y);
  gCtx.strokeText(txt, x, y);
}

function onImgSelect(imgId) {
  updateSelectedImgId(imgId)
  setImg(imgId)
  var elEditor = document.querySelector('.meme-editor-container')
  elEditor.classList.remove('hide')
  var elGallery = document.querySelector('.gallery-container')
  elGallery.classList.add('hide')
  renderMeme()

}

function openColorPalette() {
  var elColorPallete = document.querySelector('.color-pallete')
  console.log(elColorPallete)
  elColorPallete.classList.toggle('hide')

}

function increaseFont() {
  if (gMeme.selectedLineIdx === 0) {  
   increaseFontSizeOfLine(0)
   renderMeme()
  } else {
   increaseFontSizeOfLine(1)
   renderMeme()
  }
}


function decreaseFont() {
  if (gCurrLineFocus === 0) {  
    decreaseFontSizeOfLine(0)
    renderMeme()
   } else {
    decreaseFontSizeOfLine(1)
    renderMeme()
   }
}

function onChangeFillColor() {
  const fillColor = document.querySelector('[name=color]').value
  if (gCurrLineFocus === 0) changeFillColorOfLine(0, fillColor)
  if (gCurrLineFocus === 1) changeFillColorOfLine(1, fillColor)
  
  renderMeme()
}


function switchLine() {
  if (gCurrLineFocus === 0) {
    gCurrLineFocus = 1
    updateSelectedLine(1)

  }else {
    gCurrLineFocus = 0
    updateSelectedLine(0)
}
}

function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  elLink.href = data
  elLink.download = 'My-Meme.png'
}

function onChangeFontStyle(fontFamily) {
  if (gCurrLineFocus === 0) changeFontFamilyOfLine(0, fontFamily)
  if (gCurrLineFocus === 1) changeFontFamilyOfLine(1, fontFamily)
  renderMeme()
}

function onAlignToLeft() {
  if (gCurrLineFocus === 0) changeAlignOfLine(0, 'left')
  if (gCurrLineFocus === 1) changeAlignOfLine(1, 'left')
  renderMeme()
}

function onAlignToRight() {
  if (gCurrLineFocus === 0) changeAlignOfLine(0, 'right')
  if (gCurrLineFocus === 1) changeAlignOfLine(1, 'right')
  renderMeme()
}

function onAlignToCenter() {
  if (gCurrLineFocus === 0) changeAlignOfLine(0, 'center')
  if (gCurrLineFocus === 1) changeAlignOfLine(1, 'center')
  renderMeme()
}

function toggleMemeEditor() {
  var elEditor = document.querySelector('.meme-editor-container')
  elEditor.classList.add('hide')
  var elGallery = document.querySelector('.gallery-container')
  elGallery.classList.remove('hide')
}


