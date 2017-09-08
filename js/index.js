/**
 * Created by patrick on 2017/8/29.
 */
$(document).ready(function () {


    $("#submit").bind("click",function () {

        var truename = $("#name").val();
        var str;

        if(!truename){
            alert("请输入正确的姓名");
        }else if(truename){
            str = "photo.html?id="+truename;
            window.location.replace(str);

        }
    })

})
