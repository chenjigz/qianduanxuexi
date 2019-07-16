function renderTable(dataArr1) {
    tableWrapper.innerText = '';
    var table = document.createElement('table');
    table.border = '1';
    table.bgColor = 'pink';
    tableWrapper.appendChild(table);
    // 以genre来标记所要做的列表排立方式
    var genre = 0;
    // 当地区和商品都选择 1 个时，商品为第一列
    if (dataArr1[2].length === 1 && dataArr1[1].length != 0) {
        genre = 1;
        renderThead('商品', '地区', table);
        renderTbody(dataArr1, table, genre);
    }
    // 当选择一个地区，商品选择不为 0 和 1时
    if (dataArr1[1].length === 1 && dataArr1[2].length != 1 && dataArr1[2].length != 0) {
        genre = 2;
        renderThead('地区', '商品', table);
        renderTbody(dataArr1, table, genre);
    }
    // 当选择都大于1时，为满足商品相同时多行合并，则应对对象数组重排序
    if (dataArr1[1].length > 1 && dataArr1[2].length > 1) {
        // 排序函数
        function sortData(propertyName) {
            return function (obj1, obj2) {
                var val1 = obj1[propertyName];
                var val2 = obj2[propertyName];
                if (val1 < val2) {
                    return -1;
                } else if (val1 > val2) {
                    return 1;
                }
                else { return 0; }
            };
        }
        // 对获取的对象数组进行重排序
        dataArrSort = dataArr1[0].sort(sortData("product"));
        renderThead('商品', '地区', table);
        var tBody = document.createElement('tbody');
        table.appendChild(tBody);

        for (var i = 0; i < dataArrSort.length; i++) {
            var tr = document.createElement('tr');
            tBody.appendChild(tr);
            if (i === 0 || dataArrSort[i]['product'] != dataArrSort[i - 1]['product']) {
                var td1 = document.createElement('td');
                td1.align = 'center';
                tr.appendChild(td1);
                td1.rowSpan = dataArr1[1].length;
                setInnerText(td1, dataArrSort[i]['product']);
            }
            var td2 = document.createElement('td');
            td2.align = 'center';
            tr.appendChild(td2);
            setInnerText(td2, dataArrSort[i]['region']);
            for (var j = 0; j < 12; j++) {
                var td = document.createElement('td');
                td.align = 'center';
                tr.appendChild(td);
                setInnerText(td, dataArrSort[i]['sale'][j]);
            }
        }
    }
}

// 生成表头
function renderThead(str1, str2, table) {
    var tHead = document.createElement('thead');
    table.appendChild(tHead);
    var thTr = document.createElement('tr');
    tHead.appendChild(thTr);
    var th1 = document.createElement('th');
    thTr.appendChild(th1);
    setInnerText(th1, str1);
    var th2 = document.createElement('th');
    thTr.appendChild(th2);
    setInnerText(th2, str2);
    for (var i = 1; i <= 12; i++) {
        var th = document.createElement('th');
        thTr.appendChild(th);
        setInnerText(th, i + '月');
    }
}

// 生成tBody;
function renderTbody(data, table, genre) {
    var tBody = document.createElement('tbody');
    table.appendChild(tBody);
    for (var i = 0; i < data[0].length; i++) {
        var tr = document.createElement('tr');
        tBody.appendChild(tr);
        if (i === 0 && genre != 3) {
            var td1 = document.createElement('td');
            td1.align = 'center';
            tr.appendChild(td1);
            if (genre === 1) {
                td1.rowSpan = data[1].length;
                setInnerText(td1, data[0][i]['product']);
            }
            if (genre === 2) {
                td1.rowSpan = data[2].length;
                setInnerText(td1, data[0][i]['region']);
            }
        }
        if (genre === 1) {
            var td2 = document.createElement('td');
            td2.align = 'center';
            tr.appendChild(td2);
            setInnerText(td2, data[0][i]['region']);
        }
        if (genre === 2) {
            var td2 = document.createElement('td');
            td2.align = 'center';
            tr.appendChild(td2);
            setInnerText(td2, data[0][i]['product']);
        }
        for (var j = 0; j < 12; j++) {
            var td = document.createElement('td');
            td.align = 'center';
            tr.appendChild(td);
            setInnerText(td, data[0][i]['sale'][j]);
        }
    }
}