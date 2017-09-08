/**
 * Created by patrick on 2017/8/29.
 */
$(document).ready(function () {

    newlist = [
        "10000亿",
        "6亿",
        "负债1亿",
        "100万",
        "200万",
        "5000万",
        "1.2亿",
        "110元",
        "2000万",
        "负债200万",
        "负债100万",
        "1000万",
        "0",
        "10亿",
        "800万",
        "1亿",
        "60000亿",
        "负债1000万",
        "0.1万"
    ];

    newlist1 = [
        "下一代的创业领袖 BAT的接班人",
        "你想要的，都会得到 除了天上的月亮和太阳",
        "奋斗一辈子 一直在为人民做贡献",
        "只要坚持前行 人生就不会太差",
        "在你眼里没有什么解决不了的  一百万不够就再来一百万",
        "人生路上的一匹黑马   是金子总会发光",
        "如果此人还单身  千万别放过",
        "别再催TA还钱了 不是不想还 实在是穷",
        "你孩子将会成为真正的富二代",
        "加油吧，用实力证明，最终牛奶与面包都不会属于你",
        "下次见到TA  请记得赏口饭吃",
        "无论你走到哪儿 浑身都散发一种自信的钱味儿",
        "两袖清风伴一生  平平淡淡才是真",
        "钱在你眼里  终将只是个数字",
        "只要坚持前行  人生不会太差",
        "以你的才华身价最多一千万  幸好你还有美貌",
        "虽然你美不过范冰冰 帅不过刘德华  但是你身价能超过马爸爸",
        "跟你说穷  我一直没开玩笑",
        "豪车、别墅、美女、帅哥    这些统统都不用想了"
    ];

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
    }

   newstr = getQueryString("id");

    // console.log(location.search.substr(4));
    // var newstr = location.search.substr(4);


    $(".name").html(newstr);

    var _index = Math.floor(Math.random()*19);
    var number = newlist[_index];
    var description = newlist1[_index];

    var unit = number.substr(number.length-1,1);
    var num = number.substr(0,number.length-1);

    $(".num").html(num);
    $(".unit").html(unit);
    $(".description").html(description);
    console.log(num);
    console.log(unit);
    console.log(number);
    console.log(description);
    localStorage.setItem("newstr",newstr);
    localStorage.setItem("num",num);
    localStorage.setItem("unit",unit);
    localStorage.setItem("description",description);
        // [newstr,num,unit,description];


    // localStorage.info = [newstr,num,unit,description];
    // console.log(localStorage.info);

})
