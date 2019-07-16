// 设置选择状态，that调用该函数的对象，
function ObtainChecked(that, e) {
    // 处理e的兼容性
    var e = e || event;
    var target = e.target;
    // 判断目标事件是否为checkbox
    if (target.type === 'checkbox') {
        // 获取调用该函数对象里的input
        var checks = that.querySelectorAll('input');
        var checLen = checks.length;
        // 判断checkbox类型，以便分类操作
        if (target.checktype === 'all') {
            if (target.checked) {
                for (var i = 0; i < checLen; i++) {
                    checks[i].checked = true;
                }
            }
        }
        if (target.checktype === 'single') {
            // 为选择操作时
            if (target.checked) {
                //设置是否全选
                var isCheckAll = true;
                for (var i = 1; i < checLen; i++) {
                    // 如果有一个没选则不设置全选
                    if (!checks[i].checked) {
                        isCheckAll = false
                        break;
                    }
                }
                // 设置全选按钮的状态
                checks[0].checked = isCheckAll;
            }
            // 为取消操作时
            else {
                // 判断选中个数
                var count = 0;
                for (var i = 1; i < checLen; i++) {
                    if (checks[i].checked) {
                        count++;
                    }
                }
                // 如果全为未选中，则取消该按钮的取消操作，即重新使该按钮选中
                if (count === 0) {
                    target.checked = true;
                }
                // 因为为取消操作，直接设置全选按钮为未选中
                checks[0].checked = false;
            }
        }
    }

}