
; /* Start:/bitrix/components/vr/page.menu/templates/wiring.default/script.js*/
"use strict";

function OpenMobileMenu()
{
	$(".vr nav ul").toggleClass("block-display");
}

$(document).ready(function()
{
	"use strict";
		var contentButton = [];
		var contentTop = [];
		var content = [];
		var lastScrollTop = 0;
		
		var iDelta = 90;
		
		var scrollDir = '';
		var itemClass = '';
		var itemHover = '';
		var menuSize = null;
		var stickyHeight = 0;
		var stickyMarginB = 0;
		var currentMarginT = 0;
		var topMargin = 0;
		
		//private
		var vartop = 0;
		
		$(window).scroll(function(event)
		{
   			var st = $(this).scrollTop();
   			if (st > lastScrollTop){
       			scrollDir = 'down';
   			} else {
      			scrollDir = 'up';
   			}
  			lastScrollTop = st;
		});
		
		$.fn.stickUp = function(options) 
		{
			// adding a class to users div
			$(this).addClass('stuckMenu');
        	//getting options
        	var objn = 0;
        	if(options != null) 
			{
	        	for(var o in options.parts) 
				{
	        		if (options.parts.hasOwnProperty(o))
					{
	        			content[objn] = options.parts[objn];
	        			objn++;
	        		}
	        	}
	  			if(objn == 0) 
				{
	  				console.log('error:needs arguments');
	  			}

	  			itemClass = options.itemClass;
	  			itemHover = options.itemHover;
	  			if(options.topMargin != null) {
	  				if(options.topMargin == 'auto') 
					{
	  					topMargin = parseInt($('.stuckMenu').css('margin-top'));
						//alert(topMargin);
	  				}
					else 
					{
	  					if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){
	  						topMargin = parseInt(options.topMargin.replace("px",""));
	  					} else if(!isNaN(parseInt(options.topMargin))) {
	  						topMargin = parseInt(options.topMargin);
	  					} else {
	  						console.log("incorrect argument, ignored.");
	  						topMargin = 0;
	  					}	
	  				}
	  			} else {
	  				topMargin = 0;
	  			}
				
	  			menuSize = $('.'+itemClass).size();
  			}			
			stickyHeight = parseInt($(this).height());
			stickyMarginB = parseInt($(this).css('margin-bottom'));
			currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
			
			var top = ($(this).offset() || { "top": NaN }).top;
			if (isNaN(top)) 
			{
				top = 0;
				return;	
			}
			vartop = parseInt(top);
			$(this).find('*').removeClass(itemHover);
		}
		
		function bottomView(i,varscroll)
		{
			var contentView = $('#'+content[i]+'').height()*.4;
			var testView = contentTop[i] - contentView;
			if(varscroll > testView)
			{
				$('.stuckMenu .'+itemClass).removeClass(itemHover);
				$('.stuckMenu .'+itemClass+':eq('+i+')').addClass(itemHover);
			}
			else if(varscroll < iDelta)
			{
				$('.stuckMenu .'+itemClass).removeClass(itemHover);
				$('.stuckMenu .'+itemClass+':eq(0)').addClass(itemHover);
			}
		}
		
		$(document).on('scroll', function() 
		{
			var varscroll = parseInt($(document).scrollTop());
			//var varscroll = parseInt($(this).scrollTop());
			if(menuSize != null){
				//for(var i=0;i < menuSize;i++)
				for(var i=0;i < menuSize;i++)
				{
					//alert($('#'+content[i]+'').html());
					var top = ($('#'+content[i]).offset() || { "top": NaN }).top;
					if (isNaN(top)) 
						continue;						
					// contentTop[i] = offset.top;
					contentTop[i] = top;
					if(scrollDir == 'down') 
					{
						if (varscroll > contentTop[i]-iDelta && varscroll < contentTop[i]+iDelta)
						{
							$('.stuckMenu .'+itemClass).removeClass(itemHover);
							$('.stuckMenu .'+itemClass+':eq('+i+')').addClass(itemHover);
							//alert(i);
						}
						//alert('varscroll = '+varscroll+'; contentTop[i] = '+contentTop[i]);
						/*var scrollBottom = $(document).height() - $(window).height() - varscroll;
						if (scrollBottom < 100)
						{
							$('.stuckMenu .'+itemClass).removeClass(itemHover);
							$('.stuckMenu .last').addClass(itemHover);
						}*/
					}
					if(scrollDir == 'up') 
					{
						bottomView(i,varscroll);
					}
				}
			}
			/*
			topMargin = parseInt(topMargin);
			varscroll = parseInt(varscroll);
			vartop = parseInt(vartop);
			
			if(vartop < varscroll + topMargin)
			{
				$('.stuckMenu').addClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","fixed");
				$('.isStuck').css({
					top: '0px'}, 10, function()
				{

				});
			}

			if(varscroll + topMargin < vartop)
			{
				$('.stuckMenu').removeClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","relative");
			}*/
		});
		
});
/* End */
;
; /* Start:/bitrix/components/vr/callback/templates/wiring.default/script.js*/
"use strict";
function SwitchCallbackForm(e,arParams)
{
	$("#request-block").css("display","block");
	$("#request-block .background").css("display","block");
	$("#request-block .window").css("display","block");
	
	$("#request-block form .insert-dinamyc-inputs-container").html('');
	
	if (typeof(arParams) == "undefined") return;
	if (arParams["submitDescription"] != "")
		$("#request-block .submit").val(arParams["submitDescription"]);
	if (arParams["titleDescription"] != "")
		$("#request-block .title").text(arParams["titleDescription"]);
	if (arParams["formDescription"] != "")
		$("#request-block input[name=FORM_DESCRIPTION]").val(arParams["formDescription"]);
	if (arParams["formName"] != "")
		$("#request-block input[name=form]").val(arParams["formName"]);
	
	
	if (isset(arParams["inputs"]))
	{
		for (var i=0; i<arParams["inputs"].length; i++)
		{
			var input = arParams["inputs"][i];
			var sName = (isset(input["name"]))?input["name"]:"";			
			//if (sName == "") continue;
			var sTag = (isset(input["tag"]))?input["tag"]:"input";
			//if (sTag == "") continue;
			var sType = (isset(input["type"]))?input["type"]:"text";
			var sPlaceholder = (isset(input["placeholder"]))?input["placeholder"]:"";
			var sValue = (isset(input["value"]))?input["value"]:"";
			var isRequired = (isset(input["required"]))?input["required"]:false;
			
			//var sResultInput = '<'+sTag+' type="'sType+'" '+'name="'+sName+'" '+'/>';
			var oInput = document.createElement(sTag);
			var arInputAttributes = {};
			arInputAttributes["type"] = sType;
			arInputAttributes["name"] = sName;
			arInputAttributes["placeholder"] = sPlaceholder;
			arInputAttributes["value"] = sValue;
			
			$(oInput).attr(arInputAttributes);
			$(oInput).addClass("input-text");
			
			if (isRequired)
				$(oInput).addClass("required");
				
			//var isInputExists = ($("#request-block form " + sTag + "[name="+sName+"]").length > 0)?true:false;
			//if (isInputExists) continue;
			
			$("#request-block form .insert-dinamyc-inputs-container").append(oInput);
		}
	}
	
	vrCallbackBuffer["arAddData"] = GetDataFromForm(e);
}


//--------------------------------------------------------------------
function OpenSuccessForm(e)
{
	$("#response-block").css("display","block");
	$("#response-block .background").css("display","block");
	$("#response-block .window").css("display","block");
}

function CloseSuccessForm(e)
{
	$("#response-block").css("display","none");
	$("#response-block .background").css("display","none");
	$("#response-block .window").css("display","none");
}

function CloseCallbackForm(e)
{
	$("#request-block").css("display","none");
	$("#request-block .background").css("display","none");
	$("#request-block .window").css("display","none");
	
	//restore to default if it's changed by 'switchCallbackForm' function
	$("#request-block .submit").val(vrCallbackBuffer["DEFAULT_SUBMIT_DESCRIPTION"]);
	$("#request-block .title").text(vrCallbackBuffer["DEFAULT_TITLE_DESCRIPTION"]);
	$("#request-block input[name=FORM_DESCRIPTION]").val(vrCallbackBuffer["DEFAULT_FORM_DESCRIPTION"]);
	vrCallbackBuffer["arAddData"] = {};
}

function ValidateInputText(obj)
{
	if (obj == null) return false;
	if (obj.val()!='') 
	{
		obj.removeClass('error');
		return true;
	}
	
	if (!obj.hasClass('error')) obj.addClass('error');
	return false;
}

function SubmitCallbackForm(e)
{
	var url = vrCallbackBuffer["AJAX_URL"];
	SubmitFormDataToUrl(e, url);
	return false;
}

function GetDataFromForm(e)
{
	var arData = new Object();
	var arInputs = $(e).find('input');
	for (var i = 0; i < arInputs.length; i++)
	{
		var inputDOM = arInputs[i];
		var input = $(inputDOM);
		var inputType = input.attr("type");
		if ((inputType != "text") && (inputType != "hidden"))
			continue;
		
		var isRequired = input.hasClass("required");
		var inputName = input.attr("name");
		if (inputName == "") continue;
		
		var inputValue = input.val();
		arData[inputName] = inputValue;
		
		if (isRequired)
		{
			if (!ValidateInputText(input)) 
				return false;
		}
	}
	var arTextAreas = $(e).find('textarea');
	for (var i = 0; i < arTextAreas.length; i++)
	{
		var textAreaDOM = arTextAreas[i];
		var textArea = $(textAreaDOM);
		
		var isRequired = textArea.hasClass("required");
		var textAreaName = textArea.attr("name");
		if (textAreaName == "") continue;
		
		var textAreaValue = textArea.val();
		arData[textAreaName] = textAreaValue;
		if (isRequired)
		{
			if (!ValidateInputText(textArea)) 
				return false;
		}
	}
	var arSelects = $(e).find('select');
	for (var i = 0; i < arSelects.length; i++)
	{
		var selectDOM = arSelects[i];
		var select = $(selectDOM);
		
		var isRequired = select.hasClass("required");
		var selectName = select.attr("name");
		if (selectName == "") continue;
		var selectValue = $(e).find('select[name='+selectName+'] :selected').text();
		
		arData[selectName] = selectValue;
		if (isRequired)
		{
			if (!ValidateInputText(select)) 
				return false;
		}
	}
	return arData;
}

function SubmitAjaxData(url,arData, onSuccessFunction, onErrorFunction)
{
	var onSuccessInnerFunction = function(html){};
	if (typeof(onSuccessFunction) == "undefined")
	onSuccessFunction = onSuccessInnerFunction;
	var onErrorInnerFunction = function(html){};
	if (typeof(onErrorFunction) == "undefined")
	onErrorFunction = onErrorInnerFunction;

	if (url == "") return false;

	var data = "";
	var vrPrefix = 'vr_';
	for(var key in arData)
	{
		var item = arData[key];
		data += vrPrefix+key + '=' + item + '&';
	}
	if (data != "")
	data = data.slice(0,-1);
	//alert(url);
	$.ajax(
	{
		url: url,
		type: "POST",
		data: data,
		cache: false,
		error: onErrorFunction,
		success: onSuccessFunction
	});
	return true;
}

function OnSubmitError(html)
{
	//alert(html);
}

function OnSubmitSuccess(html)
{
	//alert(html);
	CloseCallbackForm();
	OpenSuccessForm();
}

function SubmitFormDataToUrl(e, url)
{	
	var arData = GetDataFromForm(e);
	if(arData==false) return false;
	
	SubmitAjaxData(url,arData,OnSubmitSuccess,OnSubmitError);
	
	return false; 
}
/* End */
;; /* /bitrix/components/vr/page.menu/templates/wiring.default/script.js*/
; /* /bitrix/components/vr/callback/templates/wiring.default/script.js*/
