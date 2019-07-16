 // 兼容性设置内容
 function setInnerText(element, content) {
    // 判断element是否支持innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}