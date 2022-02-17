'use strict'

var gImgs = [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
{ id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat'] },
{ id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] },
{ id: 7, url: 'images/7.jpg', keywords: ['funny', 'cat'] },
{ id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
{ id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] },
{ id: 10, url: 'images/10.jpg', keywords: ['funny', 'cat'] },
{ id: 11, url: 'images/11.jpg', keywords: ['funny', 'cat'] },
{ id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] },
{ id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] },
{ id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] },
{ id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
{ id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
{ id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
{ id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'My text',
            size: 20,
            align: 'center',
            color: 'white',
            fontFamily: 'impact'
        },
        {
            txt: 'My text',
            size: 20,
            align: 'center',
            color: 'white',
            fontFamily: 'impact'
        }

    ]
}

var gCurrImg = gImgs[0]


function getMeme() {
    return gMeme
}

function setLineText(userTxt) {
    if (gCurrLineFocus === 0) gMeme.lines[0].txt = userTxt
    else gMeme.lines[1].txt = userTxt
}

function getImgs() {
    return gImgs
}


function setImg(imgId) {
    gCurrImg = gImgs[gImgs.findIndex(img => img.id === imgId)]
}

function updateSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
    console.log(gMeme)
}

function getLineText(lineIdx) {
    var textLine = gMeme.lines[lineIdx].txt
    return textLine
}


function increaseFontSizeOfLine(lineIdx) {
    gMeme.lines[lineIdx].size += 5
    console.log(lineIdx)
    console.log(gMeme.lines[lineIdx].size)
}

function decreaseFontSizeOfLine(lineIdx) {
    gMeme.lines[lineIdx].size -= 5
}

function updateSelectedLine(currSelectedLineIdx) {
    gMeme.selectedLineIdx = currSelectedLineIdx
    console.log(gMeme.selectedLineIdx)
    gCurrLineFocus = currSelectedLineIdx
}

function changeFillColorOfLine(lineIdx, fillColor) {
    gMeme.lines[lineIdx].color = fillColor
}

function changeFontFamilyOfLine(lineIdx, fontFamily) {
    gMeme.lines[lineIdx].fontFamily = fontFamily
}

function changeAlignOfLine(lineIdx, alignLine) {
    gMeme.lines[lineIdx].align = alignLine
}
