function MysteriousMan_TabSolid(objName) {
    var obj = document.getElementById(objName);
    var nowValue = 1;

    var totLiNum = $("#" + objName + " > .content > .box > ul").length;
    var thisWidth = $("#tabSlide").width();

    $("#" + objName + " > .content > .box").width((totLiNum * thisWidth) + "px");
    $("#" + objName + " > .content > .box > ul").width(thisWidth + "px");
    $("#" + objName + " > .content > .box > ul > li").width(thisWidth + "px");

    $("#" + objName + " > ul.nav > li").bind("click", function () {
        // 选中的 id
        $("#" + objName + " > ul.nav > li").attr("class", "");
        $(this).attr("class", "active");

        var that = this;
        var icount = 0;
        $("#" + objName + " > ul.nav > li").each(function () {
            icount++;
            if (that == this) {
                if (nowValue == icount) return;

                var nowMarginLeft = $("#" + objName + " > .content > .box").css("margin-left").replace("px", "");
                var cz = nowMarginLeft - (icount - nowValue) * thisWidth;

                $("#" + objName + " > .content > .box > ul > li").css("filter", 'blur(1px)');
                //  filter: blur(0px);

                // $("#" + objName + " > .content > .box").css("margin-left", cz + "px");

                $("#" + objName + " > .content > .box").animate(
                    { marginLeft: cz + "px" },
                    500,
                    function () {
                        $("#" + objName + " > .content > .box > ul > li").css("filter", 'blur(0px)');
                    }
                );


                nowValue = icount;
                // alert(nowValue + " : " + this.innerHTML);
            }
        });
    });
}
