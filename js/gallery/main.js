const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */


for (i = 0; i < 5;i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + (i + 1) + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = display
  }
  function display() {
    displayedImage.src  = this.src
  }

/* 编写 变亮/变暗 按钮 */
var isDarken = true;
btn.onclick = function () {
    if(isDarken) {
        overlay.style.backgroundColor = 'rgba(0,0,0,.2)' 
        btn.innerText = '变亮'
        isDarken = false;
    }else{
        // overlay.style.backgroundColor = '' 
        overlay.style.backgroundColor = 'rgba(0,0,0,0)' 
        btn.innerText = '变暗' 
        isDarken = true;
    }
}



