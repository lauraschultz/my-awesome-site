$(document).ready(function() {
    $(".menu-show").click(function() {
        $("#left-menu").toggleClass("active-left-menu");
        $("#full-container").toggleClass("active-full-container");
        $(".continue").toggleClass("active-continue");
        $("#sponsors-visionary").toggleClass("active-sponsors-visionary");
        $(".carousel-caption").toggleClass("active-carousel-caption");
        $("#ctitle").toggleClass("active-ctitle");
        $(".all").toggleClass("active-all");
        $(".blog").toggleClass("active-blog");
    });
});
