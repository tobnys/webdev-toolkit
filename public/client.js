$(".toggle-container").on("click", function(e){
    let value = $(".main-nav").css("height");
    if(value === "50px") {
        $(".main-nav").animate({
            height: "300px"
        })
        $(".main-nav a").css("display", "block")
    }
    else {
        $(".main-nav").animate({
            height: "50px"
        })
        $(".main-nav a").css("display", "none")
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