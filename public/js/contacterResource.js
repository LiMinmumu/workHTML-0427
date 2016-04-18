$(function () {
    fishResourceListInit();
    function fishResourceListInit() {
        var $fishResourceList = $("#fishResourceList>li");
        var $fishResourceContent = $("#fishResourceContent").children("ul");
        console.log($fishResourceContent);
        $.each($fishResourceList, function (i, e) {
            $(this).on("click", function () {
                //移除同辈元素的active效果
                var $this = $(this);
                $this.siblings().removeClass("active");
                $this.addClass("active");
                //展现对应的tab页内容
                $fishResourceContent.eq(i).show();
                $fishResourceContent.eq(i).siblings("ul").hide();
            });
        });
        $fishResourceList.eq(0).trigger("click");
    }
});
