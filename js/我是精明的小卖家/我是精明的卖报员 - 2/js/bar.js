function drawBar(data, canvasid) {
    var ctx = document.getElementById(canvasid).getContext('2d');
    var graphWidth = 400;
    var graphHeight = 250;
    const graphPadding = 15;
    //轴的宽高   
    const axisWidth = graphWidth - graphPadding * 2;
    const axisHeigt = graphHeight - graphPadding * 2;
    //柱的间隔
    const barGap = 10;
    // 横轴名称
    const rowMark = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    //单个数据柱子的宽
    const barWidth = ((axisWidth - graphPadding - barGap * 13)) / 12;
    //每根柱子的颜色
    const barColor = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd", "#cbb9ba", "#abc882", "#82c8a3"];
    //轴的颜色
    const axisColor = "black";
    //最大值
    var dataMax = Math.max(...data['sale']);//es6扩展运算符 将数组转为序列。
    // console.log(Math.max(data['sale']));
    //柱状图数据sale
    var newData = data['sale'];

    // 对画布清屏
    ctx.clearRect(0,0,400,250);

    //数据和像素的折算
    var rate = dataMax / (axisHeigt - graphPadding);
    // 绘制坐标轴
    // y轴
    ctx.beginPath();
    ctx.moveTo(graphPadding, graphPadding);
    ctx.lineTo(graphPadding , graphPadding + axisHeigt);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    // x轴
    ctx.beginPath();
    ctx.moveTo(graphPadding, graphPadding + axisHeigt);
    ctx.lineTo(graphPadding + axisWidth, graphPadding + axisHeigt);
    ctx.stroke();

    // // 绘制柱状图(需要X,Y,宽度,高度)(高度=数值/rate)
    for (let i = 0; i < newData.length; i++) {
        let num = parseInt(newData[i]);
        let x = graphPadding + (i + 1) * barGap + i * barWidth;
        let y = graphHeight - graphPadding -num / rate ;
        ctx.beginPath();
        ctx.fillStyle = barColor[i];
        ctx.fillRect(x,y,barWidth,(num / rate))
        ctx.font = "12px 宋体";
        // 添加文本并控制位置
        ctx.fillText(rowMark[i], x-8, y-5);
    }
}