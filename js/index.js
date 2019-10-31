$(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleclass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
})  
  