/**
 * Created by wenshui on 15/5/24.
 */
$(function () {
    window.url = 'http://localhost';
    // window.url = 'http://192.168.0.139';
    function parseQueryString(url) {
        var reg_url = /^[^\?]+\?([\w\W]+)$/,
            reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
            arr_url = reg_url.exec(url),
            ret = {};
        if (arr_url && arr_url[1]) {
            var str_para = arr_url[1],
                result;
            while ((result = reg_para.exec(str_para)) != null) {
                ret[result[1]] = result[2];
            }
        }
        return ret;
    }
    var adminTemplate = '<ul id="dashboard-menu">' +
            '<li>' +
                '<a href="index.html">' +
                    '<i class="icon-home"></i>' +
                    '<span>主页</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a href="chart-showcase.html">' +
                    '<i class="icon-signal"></i>' +
                    '<span>图表</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a href="tables.html">' +
                    '<i class="icon-th-large"></i>' +
                    '<span>表格详情</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a href="user-list.html">' +
                    '<i class="icon-group"></i>' +
                    '<span>用户列表</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a class="dropdown-toggle" href="#">' +
                    '<i class="icon-edit"></i>' +
                    '<span>规则配置</span>' +
                    '<i class="icon-chevron-down"></i>' +
                '</a>' +
                '<ul class="submenu">' +
                    '<li><a href="form-showcase.html">路由器</a></li>' +
                    '<li><a href="form-showcase1.html">交换机</a></li>' +
                '</ul>' +
            '</li>' +
        '</ul>';
    var normalTemplate = '<ul id="dashboard-menu">' +
            '<li>' +
                '<a href="index.html">' +
                    '<i class="icon-home"></i>' +
                    '<span>主页</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a href="chart-showcase.html">' +
                    '<i class="icon-signal"></i>' +
                    '<span>图表</span>' +
                '</a>' +
            '</li>' +
            '<li>' +
                '<a href="tables.html">' +
                    '<i class="icon-th-large"></i>' +
                    '<span>表格详情</span>' +
                '</a>' +
            '</li>' +
        '</ul>';
    if ($.cookie('username')) {
        $('.userName').text($.cookie('username'));
    } else {
        alert('请先登陆');
        location.href = './signin.html';
    }
    if ($.cookie('role') == 1) {
        
    } else if ($.cookie('role') == 0) {
        $('.admin').hide();
    }
    $('#logout').on('click', function () {
        $.cookie('username', '', { expires: -1 });
        $.cookie('role', '', { expires: -1 });
        $.cookie('userId', '', { expires: -1 });
        qext.LocalStorage.clearAll();
        location.href = './signin.html';
    });
});