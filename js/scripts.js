(function ($) {

    "use strict";

    function sectionRedirect(){
        $(".option_section").click(function() {
           var seccion = $(this).attr('data-rel'); // sección a la que deseo viajar
           var posicion = (($("#"+seccion).offset().top)*1) - 50; // la altura en la que se encuentra el elemento
           $('html, body').animate({scrollTop:posicion}, 900); // nos posicionamos en la sección correspondiente
        });
     }
	function positionScroll() {
        $(window).scroll(function() {
           var currentNode = null;
              $(".option_section").each(function() {
                 var currentId = $(this).attr('data-rel');
                 var altura = (($("#"+currentId).offset().top)*1) - 50;
                 if ($(window).scrollTop() >= altura){
                    currentNode = 'a.'+currentId;
                 }
              });
              $(".option_section").removeClass('active');
              $(currentNode).addClass('active');
        });
     } 
     positionScroll();
     sectionRedirect();
	
	/* ----------------------------------------------------- */
	/* Back Top	Button									 	 */
	/* ----------------------------------------------------- */
	function back_top()
		{
			if($("html").find("#top_button").length > 0)
			{
				var left_position = parseInt($("section").offset().left) + parseInt($("section").outerWidth());
				
				if($(window).width() % 2 == 1)
					{
					left_position = left_position+1;
					}
					
				$("#top_button").css("left",left_position);
			}
		}
		
	back_top();
	
	$('#top_button').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
		return false;
	});
	
	
	/* ----------------------------------------------------- */
	/* Add "+" and "-"1 for sub menus					 	 */
	/* ----------------------------------------------------- */
    $(".menu li a").each(function () {
	
        if ($(this).parent().find("ul").length > 0) {

            if ($(this).parent().hasClass("current-menu-item") || $(this).parent().find("li").hasClass("current-menu-item")) {
                $(this).parent().find("ul").show();
                $(this).addClass("selected");
            }

            if ($(this).parent().find("ul").css("display") == "block") {

                $(this).append(" <span class='sb-span sb-is-active'>-</span>");

            }
            else {

                $(this).append(" <span class='sb-span'>+</span>");

            }

        }
		
		if($(this).parent().hasClass("has_description"))
			{
				if($(this).find(".fa").length > 0)
					{
						$(this).find("small").css("marginLeft","32px");
					}else{
						$(this).find("small").css("marginLeft","0px");
					}
					
				$(this).find("span").css("position","relative");
				$(this).find("span").css("top","-9px");
				
			}

    });
	
	
	
	/* ----------------------------------------------------- */
	/* Show sidebar on mobile								 */
	/* ----------------------------------------------------- */
	$(".mobile-menu").click(function () {
	
		$('nav .affix').perfectScrollbar('destroy');
		
		if(!$(this).hasClass("menu_opened"))
		{
		
			$('nav').addClass("mobile_menu");
			$("section,footer,header").addClass("m_relative");
			$(this).addClass("menu_opened");
			$(this).attr("data-height",$("section").css("minHeight")); // saving section height before click

			responsive_nav("mobile-clicked");
			
		}else{
		
			$('nav').removeClass("mobile_menu");
			$("section,footer,header").removeClass("m_relative");
			$(this).removeClass("menu_opened");
			
			if($(this).attr("data-height")){
				$("section").css("min-height", $(this).attr("data-height"));	
			}

		}
		
    });
	
	
	/* ----------------------------------------------------- */
	/* Destroy mobile sidebar 								 */
	/* ----------------------------------------------------- */
	function destroy_mobile_nav()
		{
			$('nav').removeClass("mobile_menu");
			$("section,footer,header").removeClass("m_relative");
			$('.mobile-menu').removeClass("menu_opened");
			$(this).attr("data-height","");
		}
	
	
	
	/* ----------------------------------------------------- */
	/* Add class to sidebar									 */
	/* ----------------------------------------------------- */
	function check_width_nav()
		{
		
			if($(window).width() > parseInt("1030"))
				{
				$(".nav-affix").removeClass("tablet_nav");
				$(".nav-affix").removeClass("phone_nav");
				$(".nav-affix").addClass("desktop_nav");
				}
				
			if($(window).width() > parseInt("767") && $(window).width() < parseInt("1030"))
				{
				$(".nav-affix").removeClass("desktop_nav");
				$(".nav-affix").removeClass("phone_nav");
				$(".nav-affix").addClass("tablet_nav");
				}
				
			if($(window).width() < parseInt("767"))
				{
				$(".nav-affix").removeClass("desktop_nav");
				$(".nav-affix").removeClass("tablet_nav");
				$(".nav-affix").addClass("phone_nav");
				}
		
		}
		
	check_width_nav();
	
	
	/* ----------------------------------------------------- */
	/* Do always %100 height			  					 */
	/* ----------------------------------------------------- */
	function get_the_height(px)
		{
		
		
			if($(window).width() > parseInt("1030"))
				{
				
				var header = parseInt($("section").css("marginTop").replace("px",""));
				var footer = parseInt($("footer").outerHeight());
				}
				
				
			if($(window).width() > parseInt("767") && $(window).width() < parseInt("1030"))
				{
				
				var header = parseInt("47");
				var footer = parseInt($("footer").outerHeight());
	
				}
				
				
			if($(window).width() < parseInt("767"))
				{
				var header = parseInt(parseInt("47"));
				var footer = parseInt($("footer").outerHeight());
				}
				
				if(px == true){
					return header+footer+"px";
				}else{
					return parseInt(header+footer);
				}
				
		}
	
	
	/* ----------------------------------------------------- */
	/* mobile minumum height			  					 */
	/* ----------------------------------------------------- */
	function minimum_height()
		{
		
		var that_w = $(window).height();
		var that_n = $(".nav-affix").height();
		
		if(that_w > that_n)
			{
			var that = that_w;
			}else{
			var that = that_n;
			}
			
			return parseInt(that);
			
		}
	
	
	/* ----------------------------------------------------- */
	/* Responsive sidebar   			  					 */
	/* ----------------------------------------------------- */
	function responsive_nav(mobile_clicked)
		{
			
			$("section").css("minHeight",$(window).height()-get_the_height()+"px");
		
			//desktop affix
			if($(".desktop_nav").hasClass("affix"))
				{
				
					$("nav .affix").css("minHeight","");
					
					if($(window).height() <= $("nav .affix").height()) // if nav content height is more large than windows height
						{
							$("nav .affix").css("height",$(window).height()+"px"); // do full window height
							$('nav .affix').perfectScrollbar(); // add scrollbar
						}else{
							$("nav .affix").css("height",$(window).height()+"px"); // do full window height
							$('.nav-affix').perfectScrollbar('destroy'); // remove scrollbar plugin on nav
						}
						
					if(mobile_clicked != "mobile-clicked")
						{
						destroy_mobile_nav();
						}
					
				}
				
			
			// desktop no affix
			if(!$(".desktop_nav").hasClass("affix"))
				{
					$(".nav-affix").css("height",""); // remove height
					$(".nav-affix").css("minHeight",$(".nav-affix").height()+"px"); // add min-height
					
					if($("section").find(".pagination").length > 0) // // pagination padding
						{
							$("section").css("minHeight",minimum_height()-parseInt("71")-get_the_height()+"px");
						}else{
							$("section").css("minHeight",minimum_height()-get_the_height()+"px");
						}
					
					if(mobile_clicked != "mobile-clicked")
						{
						destroy_mobile_nav();
						}
						
					$('.nav-affix').perfectScrollbar('destroy'); // remove scrollbar plugin on nav
				}
				
				
			// tablet
			if($(".tablet_nav").length > 0)
				{
					$(".nav-affix").css("height",""); // remove height
					$(".nav-affix").css("minHeight",$(".nav-affix").height()+"px"); // add min-height
					$("section").css("minHeight",minimum_height()-get_the_height()+"px");
					
					if(mobile_clicked != "mobile-clicked")
						{
						destroy_mobile_nav();
						}
						
					$('.nav-affix').perfectScrollbar('destroy'); // remove scrollbar plugin on nav
				}
				
			
			// phone
			if($(".phone_nav").length > 0)
				{
					$(".nav-affix").css("height",""); // remove height
					$(".nav-affix").css("minHeight",$(".nav-affix").height()+"px"); // add min-height
					$("section").css("minHeight",minimum_height()-get_the_height()+"px");
					
					if(mobile_clicked != "mobile-clicked")
						{
						destroy_mobile_nav();
						}
						
					$('.nav-affix').perfectScrollbar('destroy'); // remove scrollbar plugin on nav
				}
		
		}
		
	responsive_nav();
	
	
	/* ----------------------------------------------------- */
	/* Check if touch device   			  					 */
	/* ----------------------------------------------------- */
	function isTouchDevice(){
		return (typeof(window.ontouchstart) != 'undefined') ? true : false;
	}
	
	
	/* ----------------------------------------------------- */
	/* Body top paddings (wordpress bar and others fix) 	 */
	/* ----------------------------------------------------- */
	var paddings = (parseInt($("html").css("paddingTop").replace("px", "")) + parseInt($("html").css("marginTop").replace("px", "")) + parseInt($(".main-container").css("paddingTop").replace("px", "")) + parseInt($(".main-container").css("marginTop").replace("px", "")));
	if(paddings == 47){var paddings = 0;}

	
	
	/* ----------------------------------------------------- */
	/* Show map when click on adress					 	 */
	/* ----------------------------------------------------- */
    $("#my_adress").click(function () {

        if ($(this).hasClass('click')) { // if clicked first-time
            if (!$("header").hasClass("contact-header")) {
                $("header").animate({
                    height: "198px"
                }, 100);

                $("section").animate({
                    marginTop: 200 - parseInt(paddings) + "px"
                }, 100);

                $("#map-canvas").hide();
                $(this).removeClass("click");
                $(this).addClass("cliked");
            }

        }
        else {

            // Wait 1 second
            setTimeout(function () {

                $("#map-canvas").css("background", "#E5E3DF");
                $('#map-canvas').find(".fa").remove();

                if (!$("#map-canvas").hasClass("map_box"))

                {
                    // Load google map
                    load_googleMap();
                }

                $("#map-canvas").addClass("map_box");

            }, 600);

            $("header").animate({
                height: "508px"
            }, 100);

            $("section").animate({
                marginTop: 592  - parseInt(paddings) + "px"
            }, 100);

            $("#map-canvas").show();
            $('#map-canvas').find(".fa").remove();
            $("#map-canvas").append('<i class="fa fa-refresh fa-spin"></i>');
            $(this).removeClass("cliked");
            $(this).addClass("click");

        }

    });
	

	/* ----------------------------------------------------- */
	/* Affix header										 	 */
	/* ----------------------------------------------------- */
    if (!$("header").hasClass("contact-header")) {
            if ($(document).scrollTop() > 258) {
				if (!$('body').hasClass("admin-bar")) {
					$("header").addClass("affix");
				}
                $("nav").addClass("affix-enable");
            }
    }
	
	

    /* ----------------------------------------------------- */
	/* If scrolling hide map area						 	 */
	/* ----------------------------------------------------- */
	
    $(window).scroll(function () {
	
		if ($(window).scrollTop() > 200) {
				$('#top_button').fadeIn(200);
			} else {
				$('#top_button').fadeOut(200);
			}
			
		back_top();

        if ($(document).scrollTop() > 150) {

            if ($("header[class='affix']").length > 0) {

                $("section").css("margin-top", parseInt("200") - parseInt(paddings) + "px");

            }

        }

        if (!$("header").hasClass("contact-header")) {
                if ($(document).scrollTop() > 150) {
					 if (!$('body').hasClass("admin-bar")) {
						if($(".header-top").css("display") == "block"){
						$("header").addClass("affix");
						}
					}
					if(!$("nav").hasClass("mobile_menu"))
						{
						$("nav").addClass("affix-enable");
						}
                    if ($("#my_adress").hasClass("click")) {
                        $("#my_adress").click();
                    }
                }
                else {
					 if (!$('body').hasClass("admin-bar")) {
						$("header").removeClass("affix");
					}
					if(!$("nav").hasClass("mobile_menu"))
						{
						$("nav").removeClass("affix-enable");
						}
                }
        }

        posts_infos_fixed();

    });

	
	
    /* ----------------------------------------------------- */
	/* windows resize										 */
	/* ----------------------------------------------------- */
    $(window).resize(function () {
	
		check_width_nav();
		
		responsive_nav("mobile-clicked");

        // Call post infos fixed function
        posts_infos_fixed();
		
		back_top();

    });
	
	
	
	$("article").last().css("borderBottom","0px");
	
	
	// pagination padding
	if($("section").find(".pagination").length > 0)
		{
			$("section").css("paddingBottom","71px");
		}
	
	
	// global heights/widths
	$("section").css("marginTop", parseInt("200") - parseInt(paddings) + "px");
    $("nav").css('marginTop', parseInt($("nav").css('top').replace("px", "")) - parseInt(paddings));
    $("nav").css("paddingBottom", paddings);
		
	
	// View First post information
    $("article:first .post-date,article:first .read-more").show();
	$(".HoveredAr").removeClass("HoveredAr");
	$("article:first").addClass("HoveredAr");
	
	
	// article Types
    $('.type-quote').parent().parent().addClass("post-text-head");
    $('.type-quote').parent().parent().find('.post-title').css("marginBottom", "3px");
	
	
	 // max width
    var social_space_width = $(".header-bottom .text-right").width();
    var header_bottom_width = $(".header-bottom").width();
    var max_breadcrumb_width = parseInt(header_bottom_width) - parseInt(10) - parseInt(social_space_width);
    $(".custom-breadcrumb").css("maxWidth", max_breadcrumb_width + "px");

	
	// remove last border from menu
    $('.menu li ul li:last-child').css("border-bottom", "0px");
		
		
	/* ----------------------------------------------------- */
	/* Jquery comment reply								 	 */
	/* ----------------------------------------------------- */
    $(".comment-reply-link").click(function () {
        $("div#respond").addClass("comment_in_reply");
    });

    $("#cancel-comment-reply-link").click(function () {
        $("div#respond").removeClass("comment_in_reply");
    });

	
	// placeholder for IE9
	if(jQuery().placeholder) {
		$('input, textarea').placeholder();
	}
	
	
	// FLEXSLIDER
    $('.flexslider').flexslider({
        controlNav: false,
        smoothHeight: true,
        animation: "slide"
    });

	
    // MIXITUP
	if(jQuery().mixitup) {
		$('#portfolio-area').mixitup();
	}
		

    /* ----------------------------------------------------- */
	/* Load google map									 	 */
	/* ----------------------------------------------------- */
    function load_googleMap() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
        document.body.appendChild(script);
    }

	
    /* ----------------------------------------------------- */
	/* if contact page, always show to map area			 	 */
	/* ----------------------------------------------------- */
    if ($("header").hasClass("contact-header")) {
        if ($(this).hasClass('click')) { // if clicked first-time

            $("header").animate({
                height: "198px"
            }, 100);

            $("section").animate({
                marginTop: parseInt("200") - parseInt(paddings)
            }, 100);

            $("#map-canvas").hide();
            $(this).removeClass("click");
            $(this).addClass("cliked");

        }
        else {

            // Wait 1 second
            setTimeout(function () {

                $('#map-canvas').find(".fa").remove();
                $("#map-canvas").css("background", "#E5E3DF");

                if (!$("#map-canvas").hasClass("map_box"))

                {
                    // Load google map
                    load_googleMap();
                }

                $("#map-canvas").addClass("map_box");

            }, 500);

            $("header").animate({
                height: "508px"
            }, 100);

            $("section").animate({
                marginTop: parseInt("592") - parseInt(paddings) + "px"
            }, 100);

            $("#map-canvas").show();
            $(this).removeClass("cliked");
            $(this).addClass("click");
            $('#map-canvas').find(".fa").remove();
            $("#map-canvas").append('<i class="fa fa-refresh fa-spin"></i>');

        }
    }

	
	
    /* ----------------------------------------------------- */
	/* Search functions									 	 */
	/* ----------------------------------------------------- */
    $("#search-icon").click(function (e) {
        e.preventDefault();

        if (!$("html").hasClass("msie9")) { // if browser support css animations

            $("#search-form input").removeClass('animated bounceOutLeft');
            $("#search-form input").addClass('animated bounceInLeft');
            $("#search-form input").show();
            $("#search-form button").fadeIn("fast");

        }
        else {

            $("#search-form input").show("fast");
            $("#search-form button").show("fast");

        }

        $("#search-form input").focus();

    });

	
	
	// if on search page, focus search input
    if ($("body").hasClass("search")) {
        $("#search-form input").focus();
    }
	
	
	
    // Hide Search Input On Click Document
    $(document).click(function () { // if click on document

        if (!$("body").hasClass("search")) {
            if ($("#search-form input").is(":visible")) { // if search input is visible

                if (!$("#search-form input").is(":focus")) { // if search input in not focus

                    if (!$("html").hasClass("msie9")) { // if browser support css animations

                        $("#search-form input").removeClass('animated bounceInLeft');
                        $("#search-form input").addClass('animated bounceOutLeft');
                        $("#search-form button").fadeOut("fast");

                    }
                    else {
                        $("#search-form input").hide("fast");
						$("#search-form button").hide("fast");
                    }

                }

            }
        }

    });
	
	

    /* ----------------------------------------------------- */
	/* Read more And post date Animations				 	 */
	/* ----------------------------------------------------- */
    $(".blog article").hover(

        function () { // function mouse over

            if ($(this).find('.post-date').css("display") != "block") {
				if(!$(".nav-affix").hasClass("tablet_nav"))
					{
						if(!$(".nav-affix").hasClass("phone_nav"))
							{
				
								$('.post-date,.read-more').stop(true, true).delay(0).hide(0);

								if (window.latest_hover > $(this).attr("data-no")) // on hover animations go up or down
								{

									$(this).find('.post-date,.read-more').addClass("animated_faster bounceInUp"); // up animation

								}
								else {

									$(this).find('.post-date,.read-more').addClass("animated_faster bounceInDown"); // down animation

								}

								$(this).find('.post-date,.read-more').stop(true, true).show(0);
								
							}
					}
            }

        }, function () { // function mouse leave

            window.latest_hover = $(this).attr("data-no");
            $(this).find('.post-date,.read-more').removeClass("bounceInUp bounceInDown");

        }

    );

	

	/* ----------------------------------------------------- */
	/* .link, zoom Mouseover animations					 	 */
	/* ----------------------------------------------------- */
    $("article .link,article .zoom").hover(

        function () {

            $(this).find('span').fadeIn(100);
            $(this).find('span .icon').animate({
                top: "50%",
                borderWidth: "2px"
            }, 200);

        }, function () {

            $(this).find('span').fadeOut(200);
            $(this).find('span .icon').animate({
                top: "-100px",
                borderWidth: "0px"
            }, 200);

        }

    );
	
	
	
    /* ----------------------------------------------------- */
	/* Post share on touch								 	 */
	/* ----------------------------------------------------- */
	if(isTouchDevice())
		{
		$(".post-share").find(".icons").show();
		$(".post-share").find(".share-here").hide();
		}else{
		
		$(".post-share").hover(

			function () {
					$(this).find(".share-here,.icons").stop(true, false).slideToggle('fast');

			}, function () {
					$(this).find(".share-here,.icons").stop(true, false).slideToggle('fast');
			}

		);
	
	}

	
	/* ----------------------------------------------------- */
	/* Post share on mouseover							 	 */
	/* ----------------------------------------------------- */
    $(".post-share .icons a,.read-more").hover(

        function () {

            $(this).find(".fa,i").addClass("animated bounceIn");

        }, function () {

            $(this).find(".fa,i").removeClass("animated bounceIn");

        }

    );
	
	

	/* ----------------------------------------------------- */
	/* Project mouseover to show icons					 	 */
	/* ----------------------------------------------------- */
    $(".projects-list .link,.projects-list .zoom,.projects-list .video,.projects-list .inline-video").hover(

        function () {

            $(this).find('span').fadeIn(100);
            $(this).find('span .icon').animate({
                top: "50%"
            }, 200);

        }, function () {

            $(this).find('span').fadeOut(200);
            $(this).find('span .icon').animate({
                top: "-70px"
            }, 200);

        }

    );
	
	
	
	/* ----------------------------------------------------- */
	/* Skills area animations							 	 */
	/* ----------------------------------------------------- */
    $("div[data-width]").each(function () {

        $(this).css("width", $(this).attr("data-width"));

    });
	
	// If skills want run on sidebar
	$("nav .chloe_skills  .dotted_border").addClass("side_title");
	$("nav .chloe_skills  .dotted_border").after('<div class="side_border"></div>');
	$("nav .chloe_skills  .dotted_border").removeClass("dotted_border");
	
	
	
	/* ----------------------------------------------------- */
	/* Caroufredsel Functions							 	 */
	/* ----------------------------------------------------- */
	if(jQuery().carouFredSel) {
	
		// Carausel Plugin
		$('.caroufredsel').carouFredSel({

			auto: {},

			swipe: {
				onTouch: true,
				onMouse: true
			}

		}).css("visibility", "visible").parent().parent().parent().addClass("loaded_carousel");
		

		// Play carousel when colorbox closed
		$(document).bind('cbox_closed', function () {
			$(".caroufredsel").trigger("play");
		});

		
		
		// Pause carousel when colorbox opened
		$(document).bind('cbox_open', function () {
			$(".caroufredsel").trigger("pause");
		});

		
		
		// mouse hover carousel pause
		$(".caroufredsel").mouseenter(function () {
			$(this).trigger("pause");
		});
		
		

		// play carousel on mouse leave
		$(".caroufredsel").mouseleave(function () {

			if ($("#cboxOverlay").css("display") == "block") {

				$(this).trigger("pause");
			}

			else {

				$(this).trigger("play");

			}

		});
	
	
		// .zoom class click open colorbox for carousel
		$(".caroufredsel .zoom").click(function (e) {
			e.preventDefault();
			if ($('.caroufredsel').css("left") == "0px" || $('.caroufredsel').css("left") == undefined) {
				$(this).colorbox({
					fixed: true,
					maxWidth: '95%',
					maxHeight: '95%'
				});
			}
		});

		
		
		// .video class click open colorbox for carousel
		$(".caroufredsel .video").click(function (e) {
			e.preventDefault();
			if ($('.caroufredsel').css("left") == "0px" || $('.caroufredsel').css("left") == undefined) {
				$(".video").colorbox({
					fixed: true,
					iframe: true,
					innerWidth: 700,
					innerHeight: 500,
					maxWidth: '95%',
					maxHeight: '95%'
				});
			}
		});

		
		
		// .inline-video class click open colorbox for carousel
		$(".caroufredsel .inline-video").click(function (e) {
			e.preventDefault();
			if ($('.caroufredsel').css("left") == "0px" || $('.caroufredsel').css("left") == undefined) {
				$(".inline-video").colorbox({
					inline: true,
					fixed: true,
					maxWidth: '95%',
					maxHeight: '95%'
				});
			}
		});

	}
	
	
	/* ----------------------------------------------------- */
	/* Colorbox plugin									 	 */
	/* ----------------------------------------------------- */
    $("article .zoom,#portfolio-area .zoom").colorbox({
        fixed: true,
        maxWidth: '95%',
        maxHeight: '95%'
    });
	

    $("article .video,#portfolio-area .video").colorbox({
        iframe: true,
        innerWidth: 700,
        innerHeight: 500,
        maxWidth: '95%',
        maxHeight: '95%'
    });

	
    $("article .inline-video,#portfolio-area .inline-video").colorbox({
        inline: true,
        fixed: true,
        maxWidth: '95%',
        maxHeight: '95%'
    });
	
	

	/* ----------------------------------------------------- */
	/* Ad loading icon when submit						 	 */
	/* ----------------------------------------------------- */
    $(".form-submit #submit").click(function (e) {
        $('.form-submit').find(".fa").remove();
        $(this).before('<i class="fa fa-spinner fa-spin"></i>');
    });
	
	
	// wp calender need a litte script for selector.
	$("#wp-calendar tbody td a").each(function () {
			$(this).parent().css("background","rgba(0,0,0,0.15)");
		});

	/* ----------------------------------------------------- */
	/* Read-more and post date auto position			 	 */
	/* ----------------------------------------------------- */
    $("article").each(function () {

        $(this).find('.thumbnails').parent('a').css("margin-bottom", "12px");

        if ($(this).find('.post-date').length > 0) { // if have a element with .post-date class

            var post_header = $(this).find('.post-header').height();

            if ($(this).find('.read-more').length > 0) {

                var post_date_position = parseInt($(this).css("paddingTop").replace("px", "")) + parseInt(post_header) + "px";

            }
            else {

                var post_date_position = parseInt($(this).css("paddingTop").replace("px", "")) + parseInt(post_header) + "px";

            }

            $(this).find(".post-date").css("top", post_date_position); // set new position

        }

        if ($(this).find('.read-more').length > 0) { // if have a element with .read-more class

            var read_more_position = "99";
            var read_more_position = parseInt(post_date_position) + parseInt(read_more_position) + "px";

            $(this).find(".read-more").css("top", read_more_position); // set new position

        }

    });
	
	

	
	/* ----------------------------------------------------- */
	/* Auto position for first article					 	 */
	/* ----------------------------------------------------- */
    if ($('section').hasClass('blog')) {
        var first_date = $('.blog article:first').find('.post-date').css("top").replace("px", "");
        var first_readmore = $('.blog article:first').find('.read-more').css("top").replace("px", "");
    }
	
	

	
	/* ----------------------------------------------------- */
	/* Post infos height								 	 */
	/* ----------------------------------------------------- */
	if($(window).width() < 1030)
		{
			var that_h = 90;
		}else{
			var that_h = 210;
		}
		
	if($("header").hasClass("header_second_style"))
		{
			var that_h = 0;
		}
	
	if($("article .post-date").length > 0){
		var date_position = $("article .post-date").offset().top - that_h;
		var date_top = $("article .post-date").css("top");
	}else{
		var date_position = that_h;
		var date_top = "0px";
	}
   
    $("article .post-share").css("top", parseInt(date_top.replace("px", "")) + parseInt($(".post-date").outerHeight()) + "px"); // set position

	/* ----------------------------------------------------- */
	/* Fixed post-date and post share					 	 */
	/* ----------------------------------------------------- */
    function posts_infos_fixed() {

        if (!$("section").hasClass("blog")) // if not a blog page
        {

            if (!$("section").hasClass("home")) // if not home page
            {

                if ($(".post-date").length > 0) // if have a element with .post-date class
                {

                    if ($(document).scrollTop() > that_h) {

                        $("article .post-date").css("position", "fixed");
                        $("article .post-date").css("top", date_position);

                        var left_position = parseInt($("section").offset().left) + parseInt($("section").outerWidth());
						
						if($(window).width() % 2 == 1)
							{
							left_position = left_position+1;
							}
						
                        $("article .post-date").css("left", left_position + "px");
                        $("article .post-share").css("left", left_position + "px");

                        $("article .post-share").css("position", "fixed");
                        $("article .post-share").css("top", date_position + $(".post-date").outerHeight());

                    }
                    else {

                        if ($("article .post-date").css("position") == "fixed") {
                            $("article .post-date").attr("style","");
                            $("article .post-share").attr("style","");
                            $("article .post-date").css("top", date_top);
                            $("article .post-share").css("top", parseInt(date_top.replace("px", "")) + parseInt($(".post-date").outerHeight()) + "px");
                        }

                    } // else scrollTop > 210

                } // .post-date length > 0 

            } // if section not hasclass ".home"

        } // if section not hasclass ".blog"

    } // posts_infos_fixed() function end.		

	// Show only when javascript loaded
	$('.post-date,.post-share,.read-more').addClass("opacity_one");
	
	
	// Read-more Fix. Wordpress 3.9
	$('[data-no]').hover(

        function () {
			$(".HoveredAr").removeClass("HoveredAr");
			$(this).addClass("HoveredAr");
		}
		
	);
	
})(jQuery);