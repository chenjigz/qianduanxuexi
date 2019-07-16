
// 画折线函数
function drawLine(data, canvasid) {
    var ctx = document.getElementById(canvasid).getContext('2d');
    var graphWidth = 400;
    var graphHeight = 250;
    const graphPadding = 15;
    //轴的宽高   
    const axisWidth = graphWidth - graphPadding * 2;
    const axisHeigt = graphHeight - graphPadding * 2;
    //柱的间隔,多减一个graphPadding保证最后一项不顶尾；由于不保证有多个数据，所以以第一个计算
    const barGap = (axisWidth - graphPadding * 3) / data[0]['sale'].length;
    //每条线的颜色
    const barColor = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd", "#cbb9ba", "#abc882", "#82c8a3"];
    //轴的颜色
    const axisColor = "black";
    //最大值
    let dataMax = 0;
    var dataMaxArr = [];  //当数据对象不止一个时的各对象的最大值数组
    if (data.length === 1) {
        dataMax = Math.max(...data[0]['sale']);//es6扩展运算符 将数组转为序列。
    }
    if (data.length > 1) {
        for (var i = 0; i < data.length; i++) {
            dataMaxArr.push(Math.max(...data[i]['sale']));
        }
        dataMax = Math.max(...dataMaxArr);
    }

    //柱状图数据sale
    let newData = data['sale'];

    // 对画布清屏
    ctx.clearRect(0,0,400,250);

    //数据和像素的折算
    let rate = dataMax / (axisHeigt - graphPadding);
    // 绘制坐标轴
    // y轴
    ctx.beginPath();
    ctx.moveTo(graphPadding, graphPadding);
    ctx.lineTo(graphPadding, graphPadding + axisHeigt);
    ctx.strokeStyle = axisColor;
    ctx.stroke();
    // x轴
    ctx.beginPath();
    ctx.moveTo(graphPadding, graphPadding + axisHeigt);
    ctx.lineTo(graphPadding + axisWidth, graphPadding + axisHeigt);
    ctx.stroke();

    // // 绘制柱状图(需要X,Y,宽度,高度)(高度=数值/rate)
    if (data.length === 1) {
        ctx.beginPath();
        for (let i = 0; i < data[0]['sale'].length; i++) {
            let num = parseInt(data[0]['sale'][i]);
            let x = graphPadding + (i + 1) * barGap;
            let y = graphHeight - graphPadding - num / rate;
            ctx.strokeStyle = barColor[0];
            ctx.lineWidth = 2;
            ctx.lineTo(x, y)
            ctx.stroke();
            if (i === data[0]['sale'].length) {
                ctx.font = "8px 宋体";
                ctx.fillText((data[0]['product'] + data[0]['region']), x, y);
            }
        }
    }

    if (data.length > 1) {
        for (var i = 0; i < data.length; i++) {
            ctx.beginPath();
            for (let j = 0; j < data[i]['sale'].length; j++) {
                let num = parseInt(data[i]['sale'][j]);
                let x = graphPadding + (j + 1) * barGap;
                let y = graphHeight - graphPadding - num / rate;
                ctx.strokeStyle = barColor[i];
                ctx.lineWidth = 2;
                ctx.lineTo(x, y)
                ctx.stroke();
                if (j === data[i]['sale'].length - 1) {
                    ctx.font = "8px 宋体";
                    ctx.fillText((data[i]['product'] + data[i]['region']), x, y);

                }
            }
        }
    }

}