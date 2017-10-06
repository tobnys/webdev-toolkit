$(".toggle-container").on("click", function(e){
    let value = $(".nav-container nav > ul").css("display");
    if(value === "block") {
        $(".nav-container nav > ul").css("display", "none");
    }
    else {
        $(".nav-container nav > ul").css("display", "block");
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