 // 为除标题栏的所有数据行添加鼠标移动和离开事件，其接收 dataAArr ,以便设置鼠标离开时重新绘制鼠标进入表格是的画布
 function setTr(trRows,dataArr) {
    for (var i = 1; i < trRows.length; i++) {
        trRows[i].onmouseover = drawChart;
        // 鼠标离开，重新绘制选择内容的绘图
        trRows[1].parentNode.onmouseleave = function () {
            drawBar(dataArr[0][0], 'strip');
            drawLine(dataArr[0], 'polyLine');
        }
    }
}

// 鼠标移动到数据行所执行的程序，即获取鼠标划过行数据，并进行重画图
function drawChart(e) {
    var e = e || event;
    // 获取触发事件的父级
    var targetRow = e.target.parentNode;
    var dataSale = [];
    // 判断该数据行是否被前一行首列跨行，进行数据收集
    if (targetRow.children.length === 14) {
        for (var i = 2; i < 14; i++) {
            dataSale.push(targetRow.children[i].innerText);
        }
    } if (targetRow.children.length === 13) {
        for (var i = 1; i < 13; i++) {
            dataSale.push(targetRow.children[i].innerText);
        }
    }
    // 将数据改为对象数据形式，符合画图数据传入格式
    var dataObj = [{
        product: '',
        region: '',
        sale: dataSale
    }];
    // 调用画图
    drawBar(dataObj[0], 'strip');
    drawLine(dataObj, 'polyLine');
}