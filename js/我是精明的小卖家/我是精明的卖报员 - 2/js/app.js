      // 选中选项后，对数据进行，设置，调用，绘图，祖册事件等
      function startSet() {
        // 当选中选项后，展示画布
        chart.style.display = 'block';
        var that = this;
        // 获取点击后的选项数据
        ObtainChecked(that);
        // 由选项数据获取需要的数据
        var dataArr = ObtainData();
        // 由选择后获取的数据进行画表
        renderTable(dataArr);
        // 获取表格的所有表行
        var trRows = document.querySelectorAll('tr');
        // 为表行注册事件，其中需传入获取的数据 dataArr
        setTr(trRows, dataArr);
        // 调用函数绘制柱形图和折线图
        drawBar(dataArr[0][0], 'strip');
        drawLine(dataArr[0], 'polyLine');
    }
