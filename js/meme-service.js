'use strict'

var gImgs = [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'My text',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'My text',
            size: 20,
            align: 'left',
            color: 'red'
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

