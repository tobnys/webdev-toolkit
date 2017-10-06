$(".toggle-container").on("click", function(e){
    let value = $(".main-nav").css("height");
    if(value === "50px") {
        $(".main-nav").animate({
            height: "300px"
        })
        $(".inline-nav-container a").animate({
            opacity: "1"
        })
        $(".main-nav").css("background-color", "rgba(0, 119, 131, 1)")
    }
    else {
        $(".main-nav").animate({
            height: "50px"
        })
        $(".inline-nav-container a").animate({
            opacity: "0"
        })
        $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.4)")
    }
});

$("#dropdown").on("click", function(e){
    let value = $(".hidden").css("display");
    if(value === "block") {
        $(".hidden").css("display", "none");
    }
    else {
        $(".hidden").css("display", "block");
    }
});