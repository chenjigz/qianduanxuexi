  // 获取选择checkbox内容,并获取数据返回
  function ObtainData() {
    // 根据select选中内容获取数据
    // 获取设置元素
    var regionChecks = [];
    var productChecks = [];
    var check1 = regionWrapper.querySelectorAll('input');
    var check2 = productWrapper.querySelectorAll('input');
    // 获取地区选中项,由于有all  input所以从序号 1 开始
    for (var i = 1; i < check1.length; i++) {
        if (check1[i].checked) {
            regionChecks.push(check1[i].value);
        }
    }
    // 获取商品选中项,由于有all  input所以从序号 1 开始
    for (var i = 1; i < check2.length; i++) {
        if (check2[i].checked) {
            productChecks.push(check2[i].value);
        }
    }
    // 获取符合选择信息的数据对象
    var dataObj = [];
    for (var i = 0; i < dataLen; i++) {
        var data = sourceData[i];
        if ((regionChecks.indexOf(data['region']) != -1) && (productChecks.indexOf(data['product']) != -1)) {
            dataObj.push(data);
        }
    }
    return [dataObj, regionChecks, productChecks];
}