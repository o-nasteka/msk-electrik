/* Скрипт мобильного меню <![CDATA[ */
jQuery(function($) {
$(document).ready( function() 
{
	"use strict";
	//for dynamic highlithing menu items 
	//and for fixed menu in top on scroll page
		$(".page-menu").stickUp({
		//parts: {0:"main",1:'why_we',2:'services',3:'our_works',4:'reviews',5:'form3'},
		parts: {0:'main',1:'nashi-preimuschestva',2:'spektr-nashih-uslug',3:'nashi-raboty',4:'kontakty'},
		itemClass: "item",
		itemHover: "active",
		topMargin: "auto"
	});
		//for smooth move from menu to anchor
	$(".page-menu a").bind("click",function(event)
	{
		var speed = 500;
		var $anchor = $(this);
		var id = $anchor.attr("href");
		
		//var iPaddingTop = 15;
		var iPaddingTop = 0;
		//var iDefaultMenuHeight = 20;
		var iMenuHeight = $('.page-menu').css("height");
		//var sNavPosition = $(".nav-section").css("position");
		//iMenuHeight = (sNavPosition == "relative")?iDefaultMenuHeight:iMenuHeight;
		
		var iTop = ($(id).offset() || { "top": NaN }).top;
		if (isNaN(iTop)) 
		{
			iTop = 0;
		}
		var iAnchorTopPosition = iTop;
		//var iAnchorTopPosition = $(id).offset().top;
		
		iMenuHeight = parseInt(iMenuHeight);
		iAnchorTopPosition = parseInt(iAnchorTopPosition);
		
		var iScrollTopPosition = iAnchorTopPosition - iMenuHeight - iPaddingTop;
		
		$("html, body").stop().animate(
			{
				scrollTop: iScrollTopPosition
			},
			speed
		);
		event.preventDefault();
		
		//var isLast = ($anchor.parent.hasClass("last"))?true:false;
		//if (isLast)
		//{
		//	$anchor.parent.addClass("active");
		//}
	});
	
	//up button
	$(".scroll-top").click(function(e)
	{
		e.preventDefault();
		var speed = 500;
		$( 'html:not(:animated),body:not(:animated)' ).animate({scrollTop: 0}, speed);
	});

	//up button showing
	function show_scrollTop()
	{
		var oScrollTop = $(".scroll-top");
		($(window).scrollTop() > 300)?oScrollTop.fadeIn(600):oScrollTop.fadeOut(600);
	}
	$(window).scroll(function(){show_scrollTop();});
});
});
/* ]]> */
