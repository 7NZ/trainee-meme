(function () {
    var sHeight = $("#focusbanner").height(); //获取焦点图的宽度（显示面积）
    var lenBanner = $("#focusbanner ul li").length; //获取焦点图个数
    var indexBanner = 0;
    var picTimerBanner;

    //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
    var btn = "<div class='btnBgbanner'></div><div class='btnbanner'>";
    for (var i = 0; i < lenBanner; i++) {
        btn += "<span>" + (i + 1) + "</span>";
    }
    btn += "</div><div class='preNextbanner prebanner'></div><div class='preNextbanner nextbanner'></div>";
    $("#focusbanner").append(btn);
    $("#focusbanner .btnBgbanner").attr("class", "span-hover");

    //为小按钮添加鼠标滑入事件，以显示相应的内容
    $("#focusbanner .btnbanner span").attr("class", "").mouseenter(function () {
        indexBanner = $("#focusbanner .btnbanner span").index(this);
        showPicsBanner(indexBanner);
    }).eq(0).trigger("mouseenter");

    //上一页、下一页按钮透明度处理
    $("#focusbanner .preNextbanner").css("opacity", 0.2).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.8" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0.6" }, 300);
    });

    //上一页按钮
    $("#focusbanner .prebanner").click(function () {
        indexBanner -= 1;
        if (indexBanner == -1) { indexBanner = lenBanner - 1; }
        showPicsBanner(indexBanner);
    });

    //下一页按钮
    $("#focusbanner .nextbanner").click(function () {
        indexBanner += 1;
        if (indexBanner == lenBanner) { indexBanner = 0; }
        showPicsBanner(indexBanner);
    });

    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
    $("#focusbanner ul").css("height", sHeight * (lenBanner));

    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    $("#focusbanner").hover(function () {
        clearInterval(picTimerBanner);
    }, function () {
        picTimerBanner = setInterval(function () {
            showPicsBanner(indexBanner);
            indexBanner++;
            if (indexBanner == lenBanner) { indexBanner = 0; }
        }, 4000); //此4000代表自动播放的间隔，单位：毫秒
    }).trigger("mouseleave");

    //显示图片函数，根据接收的indexBanner值显示相应的内容
    function showPicsBanner(indexBanner) { //普通切换
        var nowLeft = -indexBanner * sHeight; //根据indexBanner值计算ul元素的left值
        $("#focusbanner ul").stop(true, false).animate({ "top": nowLeft }, 300); //通过animate()调整ul元素滚动到计算出的position
        //$("#focus .btn span").removeClass("on").eq(indexBanner).addClass("on"); //为当前的按钮切换到选中的效果
        $("#focusbanner .btnbanner span").stop(true, false).attr("class", "").animate({ "opacity": "1" }, 300).eq(indexBanner).stop(true, false).attr("class", "span-hover").animate({ "opacity": "1" }, 300); //为当前的按钮切换到选中的效果
    }
})();

