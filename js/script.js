var $ = jQuery.noConflict();
/*
function OpenVRBuildCapture(e,sFormDescription)
{
	sFormDescription = (isset(sFormDescription))?sFormDescription:vrServicesBuffer["DEFAULT_FORM_DESCRIPTION"];
	var arParams = {}; //object
	arParams["titleDescription"] = vrServicesBuffer["TITLE_DESCRIPTION"];
	arParams["submitDescription"] = vrServicesBuffer["SUBMIT_DESCRIPTION"];
	arParams["formDescription"] = sFormDescription;
	arParams["formName"] = "raschet_stoimosti";
	
	arParams["inputs"] = []; //array
	arParams["inputs"][0] = {}; //object
	arParams["inputs"][0]["tag"] = "input";
	arParams["inputs"][0]["type"] = "text";
	arParams["inputs"][0]["name"] = "kvadrat";
	arParams["inputs"][0]["placeholder"] = vrServicesBuffer["KVADRAT_PLACEHOLDER"];
	arParams["inputs"][0]["value"] = "";
	arParams["inputs"][0]["required"] = true;
	
	SwitchCallbackForm(e,arParams);
	return false;
}*/

function OpenMainCapureForm(e)
{
	var arParams = {}; //object
	//arParams["titleDescription"] = vrMainCaptureBuffer["TITLE_DESCRIPTION"];
	arParams["submitDescription"] = vrMainCaptureBuffer["SUBMIT_DESCRIPTION"];
	arParams["formDescription"] = vrMainCaptureBuffer["FORM_DESCRIPTION"];
	arParams["formName"] = "main_capture";
	
	SwitchCallbackForm(e,arParams);
	return false;
}

function OpenCalcCapureForm(e,sFormDescription)
{
	sFormDescription = (isset(sFormDescription))?sFormDescription:vrCalcCaptureBuffer["DEFAULT_FORM_DESCRIPTION"];
	var arParams = {}; //object
	//arParams["titleDescription"] = vrCalcCaptureBuffer["TITLE_DESCRIPTION"];
	arParams["submitDescription"] = vrCalcCaptureBuffer["SUBMIT_DESCRIPTION"];
	arParams["formDescription"] = sFormDescription;
	arParams["formName"] = "calc_capture";
	
	SwitchCallbackForm(e,arParams);
	return false;
}