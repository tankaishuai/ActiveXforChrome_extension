/**
 * \u521b\u5efa\u5b89\u5168\u63a7\u4ef6\u811a\u672c
 */
var rs = "";

function CreateControl(DivID, Form, ObjectID, mode, language) {
	var d = document.getElementById(DivID);
	var obj = document.createElement('object');
	d.appendChild(obj);
	obj.width = 162;
	obj.height = 20;
	obj.classid="clsid:E61E8363-041F-455c-8AD0-8A61F1D8E540";
	obj.id=ObjectID;

	var version = getVersion(obj);
	passInit(obj, mode, language, version);
	var rc = null;
	if (version >= 66816) { //66560 1.4.0.0 //66306 1.3.0.2 //66305 1.3.0.1 //65539 1.3.0
		getRS();
		if (rs != "") {
			obj.RandomKey_S = rs;
			rc = obj.RandomKey_C;
		}
	}
	return rc;
}

/**
 * \u53d6\u63a7\u4ef6\u7248\u672c\u53f7
 */
function getVersion(obj) {
	try	{
		var version = obj.Version;
		try {
			if (version == undefined)
				return 0;
		} catch(ve) {//IE5.0
			return 0;
		}
		return version;
	}
	catch(e) {
		return 0;
	}
}

/**
 * \u53d6rs
 */
function getRS() {
	if (rs == "") {
		url = "refreshrs.do";
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	
		if(xmlhttp) {
			xmlhttp.open("POST", url, false);
			xmlhttp.send();
			rs = xmlhttp.responseText;
			if (rs == null) {
				alert("Control rs error.");
				rs = "";
			}
			else {
				rs = rs.replace(/[ \t\r\n]/g,   "");
				if (rs.length != 24) {
					alert("Control rs error:" + rs.length);
					rs = "";
				}
			}
		}
	}
}

/**
 * \u53d6\u63a7\u4ef6\u7248\u72b6\u6001
 */
function getState(obj) {
	try	{
		var state = obj.State;
		try {
			if (state == undefined)
				return 0;
		} catch(ve) {//IE5.0
			return 0;
		}
		return state;
	}
	catch(e) {
		return 0;
	}
}

/**
 * \u63a7\u4ef6\u68c0\u6d4b
 */
function passControlCheck(obj, mode, language) {
	try	{
		var version = getVersion(obj);
		passInit(obj, mode, language, version);
		if (version < 65539) {//66560 1.4.0.0 //66306 1.3.0.2 //66305 1.3.0.1 //65539 1.3.0
			alert(SAFECONTROL_VERSION);
			return false;
		}
	}
	catch(e) {
		alert(SAFECONTROL_INSTALL);
		return false;
	}
	return true;
}

/**
 * \u8bbe\u7f6e\u63a7\u4ef6
 */

function passInit(obj, mode, language, version) {
	obj.SetLanguage(language);
	//\u53e3\u4ee4
	if (mode == 0) {
		obj.PasswordIntensityMinLength = 1;
		obj.MaxLength = 20;
		obj.OutputValueType = 2;
		obj.PasswordIntensityRegularExpression = "^[!-~]*$";
	}
	//\u65b0\u53e3\u4ee4
	else if (mode == 1) {
		obj.PasswordIntensityMinLength = 8;
		obj.MaxLength = 20;
		obj.OutputValueType = 2;
		obj.PasswordIntensityRegularExpression = "(^[!-~]*[A-Za-z]+[!-~]*[0-9]+[!-~]*$)|(^[!-~]*[0-9]+[!-~]*[A-Za-z]+[!-~]*$)";
	}
	//\u52a8\u6001\u53e3\u4ee4
	else if (mode == 2) {
		obj.PasswordIntensityMinLength = 6;
		obj.MaxLength = 6;
		obj.OutputValueType = 1;
		obj.PasswordIntensityRegularExpression = "^[0-9]{6}$";
	}
	//\u7535\u8bdd\u94f6\u884c\u5bc6\u7801
	else if (mode == 3) {
		obj.PasswordIntensityMinLength = 6;
		obj.MaxLength = 6;
		obj.OutputValueType = 1;
		obj.PasswordIntensityRegularExpression = "^[0-9]{6}$";
	}
	//\u624b\u673a\u94f6\u884c\u5bc6\u7801
	else if (mode == 4) {
		obj.PasswordIntensityMinLength = 8;
		obj.MaxLength = 20;
		obj.OutputValueType = 1;
		obj.PasswordIntensityRegularExpression = "^[!-~]*$";
	}
}
