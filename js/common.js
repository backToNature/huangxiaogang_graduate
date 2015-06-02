/**
 * Created by wenshui on 15/5/24.
 */
$(function () {
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
    if ($.cookie('username')) {
        $('.userName').text($.cookie('username'));
    } else {
        alert('请先登陆');
        location.href = './signin.html';
    }
    $('#logout').on('click', function () {
        $.cookie('username', '', { expires: -1 });
        $.cookie('role', '', { expires: -1 });
        location.href = './signin.html';
    });
});