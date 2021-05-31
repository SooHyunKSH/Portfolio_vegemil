$(function(){
    /* click list li 클릭 시 display0$ 나오기 */
    $(".click_list li").click(function() {
      $(".click_list li").removeClass("on");
      $(this).addClass("on");
      let indexNum = $(this).index() + 1;
      $(".display_wrap .display_box").css("display", "none");
      $(".display_wrap .display_box").each(function() {
        let thisIndex = $(this).index() + 1;
        if (indexNum == thisIndex) {
          $(this).css("display", "block");
        }
        console.log($(this).attr("class"))
        console.log($(this).index() + 1)
      });
    });
    $(".close_btn").click(function() {
      $(".display_wrap .display_box").css("display", "none");
    });

    /* suport 아코디언 FAQ */
    $("dl dt").on("click",function(){
      if( $("+dd",this).css("display") == "none"){
        $("dl dd").slideUp();
        $("+dd",this).slideDown();
      }
    });
});
