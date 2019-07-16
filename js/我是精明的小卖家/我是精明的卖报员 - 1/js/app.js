function startSet() {
    var that = this;
    ObtainChecked(that);
    // 将返回的获取数据对象dataObj ,地区选择项数组regionChecks,商品选择项数组productChecks给rdataArr
    var dataArr = ObtainData();
    console.log(dataArr);
    renderTable(dataArr);
}