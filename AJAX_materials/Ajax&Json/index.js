     
$("#front").mouseenter(function(){
	if ($("#back").hasClass("current")) {
		$("#back").removeClass("current");
		$("#back_page").css("display","none");
		$("#front").addClass("current");
		$("#front_page").css("display","block");
	}   //样式变换1
});

$("#back").mouseenter(function(){
	if ($("#front").hasClass("current")) {
		$("#front").removeClass("current");
		$("#front_page").css("display","none");
		$("#back").addClass("current");
		$("#back_page").css("display","block");
	}   //样式变换2
});

$(document).ready(function(){
	$("#front li").mouseover(function(){
		$("li").removeClass("cur_option");
		$(this).addClass("cur_option");
		var flog=0;
	    var _index=$("#front li").index($(this));   //获取标签的索引
	       // console.log(_index);
        loadJson(flog,_index);
	});

	$("#back li").mouseover(function(){
        $("li").removeClass("cur_option");
        $(this).addClass("cur_option");
		var flog=1;
	    var _index=$("#back li").index($(this));   //获取标签的索引
	       // console.log(_index);
        loadJson(flog,_index);
	});
	
})

function loadJson(fl,ind) {
    var http_request;
    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest(); // //  IE7+, Firefox, Chrome, Opera, Safari
    } else {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");  ////IE5 IE6
    }

    http_request.open("GET", "index.php?flog=" + fl + "&index=" + ind, true);
    http_request.send();
    http_request.onreadystatechange = function () {
        if (http_request.readyState === 4) {
            if (http_request.status === 200) {
                var data_str = JSON.parse(http_request.responseText);
                $("#comp").html(data_str["company"]);
                $("#job").html(data_str["position"]);
                $("#num").html(data_str["recruitingNumbers"]);
                $("#place").html(data_str["workingLocation"]);
                $("#exper").html(data_str["workExperience"]);
                $("#record").html(data_str["education"]);
                $("#salary").html(data_str["wage"]);
            } else {
                console.log("发生错误" + http_request.status);
            }
        }
    }
}

/*
function  loadJson(fl,ind) {
    $.ajax({
        type: "GET",
        url: "index.php?flog="+fl+"&index="+ind,
        dataType: "json",
		success:function (data) {
			var data_str=JSON.parse(data)
            $("#comp").html(data_str["company"]);
            $("#job").html(data_str["position"]);
            $("#num").html(data_str["recruitingNumbers"]);
            $("#place").html(data_str["workingLocation"]);
            $("#exper").html(data_str["workExperience"]);
            $("#record").html(data_str["education"]);
            $("#salary").html(data_str["wage"]);
        },
        error:function (result) {
			console.log("错误"+result.status)
        }
    })
}*/
