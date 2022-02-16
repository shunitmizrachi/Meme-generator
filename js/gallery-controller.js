'use strict'


function renderGallery() {
    var images = getImgs()
    var strHtmls = images.map(function (img) {
        return`<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src="${img.url}">`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('')

    var elGallery = document.querySelector('.gallery-container')
    console.log(elGallery)
    
}



