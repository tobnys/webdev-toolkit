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

    function setActiveButton(button){
        $(button).css("border-bottom", "3px solid rgb(0, 231, 255)");
        $(button).css("color", "rgb(0, 231, 255)");

        console.log($("li").children())
        console.log(button.id)  

        $("li").children().not(`#${button.id}`).css("border-bottom", "3px solid rgba(0, 231, 255, 0)");
        $("li").children().not(`#${button.id}`).css("color", "rgba(255, 255, 255, 1)");
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

    // CATEGORY SUB-PAGES
    $("#c-html, #c-css, #c-js, #c-jquery, #c-node, #c-react").click(function(e){
        e.preventDefault();
        switchPage(currentPage, ".category-sub-page");
    });

    // CATEGORY PAGE BACK ARROW
    $("#back-arrow").click(function(e){
        e.preventDefault();
        switchPage(currentPage, ".category-page");
    });

    $("#page-fonts").click(function(e){
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".font-page");
        setActiveButton(this);
    });

    // FONT PAGE BUTTONS
    $(".sort-container button").click(function(e){
        webFontsReq(e.target.id);
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
        showMessage();
    });

    // FUNCTIONS FOR USER FEEDBACK ON INPUT
    let timer;
    function showMessage() {
        $(".feedback-2").animate({
            opacity: "1",   
        })
        $(".feedback-2 p").animate({
            paddingTop: "0"
        });
        timer = setTimeout(hideMessage, 4000);
    }

    function hideMessage(){
        $(".feedback-2").animate({
            opacity: "0",   
        })
        $(".feedback-2 p").animate({
            paddingTop: "20"
        });
        clearTimeout(timer);
    }

    // GOOGLE WEB FONTS API
    function webFontsReq(target){
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/webfonts/v1/webfonts`,
            data: {
                key: "AIzaSyCFi8QJL_jEJdhXu-tr-1mqLpoOJzJuYGg",
                sort: `${target}`
            },
            success: function(res){
                console.log("API call success");
                console.log(res.items[0]);
                appendHTML(res);
                applyFonts(res);
            },
            error: function(err){
                console.log("API call failed")
            },
        })
    };

    function appendHTML(f){
        $(".card-1 h2").text(f.items[0].family);
        $(".card-2 h2").text(f.items[1].family);
        $(".card-3 h2").text(f.items[2].family);
        $(".card-4 h2").text(f.items[3].family);
        $(".card-5 h2").text(f.items[4].family);
        $(".card-6 h2").text(f.items[5].family);

        $("#card-1").attr("href", `https://fonts.google.com/specimen/${f.items[0].family}`);
        $("#card-2").attr("href", `https://fonts.google.com/specimen/${f.items[1].family}`);
        $("#card-3").attr("href", `https://fonts.google.com/specimen/${f.items[2].family}`);
        $("#card-4").attr("href", `https://fonts.google.com/specimen/${f.items[3].family}`);
        $("#card-5").attr("href", `https://fonts.google.com/specimen/${f.items[4].family}`);
        $("#card-6").attr("href", `https://fonts.google.com/specimen/${f.items[5].family}`);
    };

    function applyFonts(f){
        WebFont.load({
            google: {
              families: [f.items[0].family, f.items[1].family, f.items[2].family, f.items[3].family, f.items[4].family, f.items[5].family]
            }
        });

        $(".card-1").css("font-family", `${f.items[0].family}, ${f.items[0].category}`);
        $(".card-2").css("font-family", `${f.items[1].family}, ${f.items[1].category}`);
        $(".card-3").css("font-family", `${f.items[2].family}, ${f.items[2].category}`);
        $(".card-4").css("font-family", `${f.items[3].family}, ${f.items[3].category}`);
        $(".card-5").css("font-family", `${f.items[4].family}, ${f.items[4].category}`);
        $(".card-6").css("font-family", `${f.items[5].family}, ${f.items[5].category}`);
    };

})();
