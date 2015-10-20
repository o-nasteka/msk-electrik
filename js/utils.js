"use strict";

function isset(variable)
{
	if (typeof(variable) == "undefined")
		return false;
	return true;
}


function vrOpenBitrixWindow(sRelativeUrl)
{
    var bxDialog = new BX.CDialog({'content_url':sRelativeUrl, 'width':'726', 'height':'470'});
    bxDialog.Show();
	
	//new BX.CDialog({\'content_url\':\'/bitrix/admin/component_props.php?component_name=vr%3Abuild.params&component_template=.default&template_id=build&lang=ru&src_path=%2Fbuild%2Fbitrix_personal%2Ftemplates%2Fbuild%2Fparams%2Fcomponent.php&src_line=15&src_page=%2Fbuild%2Findex.php&src_site=s2\',\'width\':\'\',\'height\':\'\',\'min_width\':\'450\'})).Show();
}

function vrSubmitAjaxData(url,arData, onSuccessFunction, onErrorFunction)
{
    //ыв
    if (typeof(onSuccessFunction) == "undefined")
    {
        var onSuccessInnerFunction = function(html){};
        onSuccessFunction = onSuccessInnerFunction;
    }
    if (typeof(onErrorFunction) == "undefined")
    {
        var onErrorInnerFunction = function(html){};
        onErrorFunction = onErrorInnerFunction;
    }

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
    //alert(data);
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

function vrSubmitFormDataToUrl(e, url)
{
    var arData = vrGetDataFromForm(e);
    if(arData==false) return false;

    vrSubmitAjaxData(url,arData);

    return false;
}

function vrGetDataFromForm(e)
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
            if (!vrValidateInputText(input))
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
            if (!vrValidateInputText(textArea))
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
        //var selectValue = select.val();
        //var selectValue = select.text();
        var selectValue = $(e).find('select[name='+selectName+'] :selected').text();

        arData[selectName] = selectValue;
        if (isRequired)
        {
            if (!vrValidateInputText(select))
                return false;
        }
    }
    return arData;
}

function vrValidateInputText(obj)
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