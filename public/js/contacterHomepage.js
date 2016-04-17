/**
 * Created by joker on 16-4-17.
 */
$(function(){

    fishHomeRankingInit();
    /**
     * 初始化页面状态
     */
    function fishHomeRankingInit(){
        //初始化单击事件
        var $fishHomeRankingTabs=$("#fishHomeRankingTabs > li");
        var $rankingPanels=$(".fish-home-ranking-panels").children("div");
        $.each($fishHomeRankingTabs,function(i,e){
            $(this).on("click",function(){
                //移除同辈元素的active效果
                var $this=$(this);
                $this.siblings().removeClass("active");
                $this.addClass("active");
                //展现对应的tab页内容
                $rankingPanels.eq(i).show();
                $rankingPanels.eq(i).siblings("div").hide();
            });
        });
        $fishHomeRankingTabs.eq(0).trigger("click");
    }
    initPanelSwip();
    function initPanelSwip(){

        var $fishHomeRankingPanel=$(".fish-home-ranking-panel");
        /*touch.on($fishHomeRankingPanel, 'touchstart', function(ev){
            ev.preventDefault();
        });*/
        //初始化滑动事件
        touch.on($fishHomeRankingPanel,"swiperight",function(ev){
            initRankPanel(ev);
        });
        touch.on($fishHomeRankingPanel,"swipeleft",function(ev){
            initRankPanel(ev);
        });
    }
    function initRankPanel(ev){
        var $rankingPanels=$(".fish-home-ranking-panels").children("div");
        var $currentRankingTab=$(ev.target).parentsUntil("div[class*=fish-home-ranking-panel]");
        var $currentRankingTabContent=$($currentRankingTab[$currentRankingTab.length-1]).parent();
        $currentRankingTabContent.hide();
        if(ev.direction=="right"){
            if($currentRankingTabContent.prev().length>0){
                var prevRankingTabContent=$currentRankingTabContent.prev();
                prevRankingTabContent.siblings().hide();
                prevRankingTabContent.show();
            }else{
                $rankingPanels.eq(3).siblings().hide();
                $rankingPanels.eq(3).show();
            }
            initRankTab($currentRankingTabContent.attr("class").split(" ")[0],true);
        }else{
            if($currentRankingTabContent.next().length>0){
                var $nextRankingTabContent=$currentRankingTabContent.next();
                $nextRankingTabContent.siblings().hide();
                $nextRankingTabContent.show();
            }else{
                $rankingPanels.eq(0).siblings().hide();
                $rankingPanels.eq(0).show();
            }
            initRankTab($currentRankingTabContent.attr("class").split(" ")[0],false);
        }
    }
    function initRankTab(className,isLeft){
        var $fishHomeRankingTabs=$("#fishHomeRankingTabs > li");
        var $currentTab=null;
        if(className=="fish-home-monthranking-details"){
            if(isLeft){
                $currentTab=$fishHomeRankingTabs.eq(3);
            }else{
                $currentTab=$fishHomeRankingTabs.eq(1);
            }
        }else if(className=="fish-home-newsranking-details"){
            if(isLeft){
                $currentTab=$fishHomeRankingTabs.eq(0);
            }else{
                $currentTab=$fishHomeRankingTabs.eq(2);
            }
        }else if(className=="fish-home-memberranking-details"){
            if(isLeft){
                $currentTab=$fishHomeRankingTabs.eq(1);
            }else{
                $currentTab=$fishHomeRankingTabs.eq(3);
            }
        }else if(className=="fish-home-bussinessmemberranking-details"){
            if(isLeft){
                $currentTab=$fishHomeRankingTabs.eq(2);
            }else{
                $currentTab=$fishHomeRankingTabs.eq(0);
            }
        }
        $currentTab.siblings().removeClass("active");
        $currentTab.addClass("active");

    }
});
