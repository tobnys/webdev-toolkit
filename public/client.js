(function () {

    let currentPage = ".landing-page";

    // HAMBURGER MENU FUNCTIONS
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
            $(".main-nav a").css("display", "block")
        }
        else {
            $(".main-nav").animate({
                height: "50px"
            })
            $(".inline-nav-container a").animate({
                opacity: "0"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.2)")
            $(".main-nav a").css("display", "none")
        }
    });

    function closeMenu(){
        let value = $(".main-nav").css("height");
        if($(window).width() < 1024) {
            if(value === "50px") {
                $(".main-nav").animate({
                    height: "300px"
                })
                $(".inline-nav-container a").animate({
                    opacity: "1"
                })
                $(".main-nav").css("background-color", "rgba(0, 119, 131, 1)")
                $(".main-nav a").css("display", "block")
            }
            else {
                $(".main-nav").animate({
                    height: "50px"
                })
                $(".inline-nav-container a").animate({
                    opacity: "0"
                })
                $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.2)")
                $(".main-nav a").css("display", "none")
            }
        }
        else console.log("Not in mobile state");
    }

    // PAGE NAVIGATION 
    function switchPage(originalPage, targetPage){
        $(`${originalPage}`).animate({
            left: "250px",
            opacity: "0"
        }, 200, function(){
            $(this).css("display", "none");
            $(`${targetPage}`).css("display", "block");
            $(`${targetPage}`).animate({
                opacity: "1"
            }, 200, function(){
                currentPage = `${targetPage}`;
            });
        });
    }
        
    function setInactiveButtons(){
        $("li").children().css("border-bottom", "0")
        $("li").children().css("color", "rgb(255, 255, 255)")
    }

    function setActiveButton(button){
        setInactiveButtons();
        $(button).css("border-bottom", "3px solid rgb(0, 231, 255)");
        $(button).css("color", "rgb(0, 231, 255)");
    }

    $("#page-generations").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".generation-page");
        setActiveButton(this);
    });

    $("#page-categories").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".category-page");
        setActiveButton(this);
    });

    $("#page-fonts").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".font-page");
        setActiveButton(this);
    });

    $("#page-login").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".login-page");
        setActiveButton(this);
    });

    $("#page-signup").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".register-page");
        setActiveButton(this);
    });


    // COPY TO CLIPBOARD FUNCTIONS

    function copyToClipboard(elem){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(elem).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $("#copy-btn").click(function(e){
        copyToClipboard("#output-text");
    });

})();



// border-bottom: 3px solid rgb(0, 231, 255);
// color: rgb(0, 231, 255);