//**************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u662f\u8868\u5355\u68c0\u67e5\u76f8\u5173\u7684\u51fd\u6570
//***  \u6ce8\u610f:\u5f15\u7528\u6b64js\u6587\u4ef6\u65f6,\u5fc5\u987b\u5f15\u7528common.js
//**************************************

//**************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u662fFORM\u8868\u5355\u68c0\u67e5\u51fd\u6570
//**************************************

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c06\u8868\u5355\u5143\u7d20\u7f6e\u4e3aDISABLED(\u5305\u62ec\u6240\u6709\u8868\u5355\u5143\u7d20),\u5e76\u5c06\u8be5\u5143\u7d20\u80cc\u666f\u8272\u81f4\u7070
 *
 * Parameter inputName -- \u6b32DISABLED\u7684\u8868\u5355\u5143\u7d20\u7684\u540d\u79f0;
 *           flag -- \u662f\u5426disabled,true:disabled = true;false:disabled = false;
 *
 * \u4f8b\u5b50\uff1a setDisabled("form1.text1",true);
 *        setDisabled("form1.text1|radio1|select1",true);
 */
function setDisabled(inputName,flag)
{
    var inputObj;
    var bgStr;
    
    if (flag)
        bgStr = "#e7e7e7";
    else
        bgStr = "#ffffff";
    
    if(inputName.indexOf("|") == -1)
    {
        inputObj = eval(CONST_STRDOC + inputName);
        
        if (!inputObj.length)
        {
            if (inputObj.type != "radio" && inputObj.type != "checkbox")
                inputObj.style.background = bgStr;
            
            inputObj.disabled = flag;
        }
        else if (inputObj.type == "select-one" || inputObj.type == "select-multiple")
        {
            inputObj.style.background = bgStr;
            inputObj.disabled = flag;
        }
        else
        {
            for(var i = 0; i < inputObj.length; i++)
            {
                inputObj[i].disabled = flag;
            }
        }
        
        return;
    }
    
    var tmp = inputName.split(".");
    var formName = tmp[0];
    var objName = tmp[1].split("|");

    for (var i = 0; i < objName.length; i++)
    {
        inputObj = eval(CONST_STRDOC + formName + "." + objName[i]);

        if (!inputObj.length)
        {
            if (inputObj.type != "radio" && inputObj.type != "checkbox")
                inputObj.style.background = bgStr;
            
            inputObj.disabled = flag;
        }
        else if (inputObj.type == "select-one" || inputObj.type == "select-multiple")
        {
            inputObj.style.background = bgStr;
            inputObj.disabled = flag;
        }
        else
        {
            for(var j = 0; j < inputObj.length; j++)
            {
                inputObj[j].disabled = flag;
            }
        }
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c06\u8868\u5355\u5143\u7d20\u7f6e\u4e3aREADONLY(\u4ec5\u6587\u672c\u57df\u6216\u8005textarea),\u5e76\u5c06\u8be5\u5143\u7d20\u80cc\u666f\u8272\u81f4\u7070
 *
 * Parameter inputName -- \u6b32DISABLED\u7684\u8868\u5355\u5143\u7d20\u7684\u540d\u79f0;
 *           flag -- \u662f\u5426disabled,true:disabled = true;false:disabled = false;
 *
 * \u4f8b\u5b50\uff1a setDisabled("form1.text1",true);
 *        setDisabled("form1.text1|text2",true);
 */
function setReadOnly(inputName,flag)
{
    var inputObj;
    var bgStr;
    
    if (flag)
        bgStr = "#e7e7e7";
    else
        bgStr = "#ffffff";
    
    if(inputName.indexOf("|") == -1)
    {
        inputObj = eval(CONST_STRDOC + inputName);
        
        inputObj.style.background = bgStr;
        inputObj.readOnly = flag;
    }
    
    var tmp = inputName.split(".");
    var formName = tmp[0];
    var objName = tmp[1].split("|");
    
    for (var i = 0; i < objName.length; i++)
    {
        inputObj = eval(CONST_STRDOC + formName + "." + objName[i]);
        
        inputObj.style.background = bgStr;
        inputObj.readOnly = flag;
    }
}
/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u8868\u5355\u8f93\u5165\u57df\u662f\u5426\u4e3a\u7a7a\uff0c\u4e0d\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter objName -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *
 * Return false --\u4e0d\u4e3a\u7a7a
 *        true -- \u4e3a\u7a7a
 *
 * \u4f8b\u5b50\uff1aisEmpty('form1.userName'); 
 */
function isEmpty(objName)
{
    var inputObj = eval(CONST_STRDOC + objName);

    if (inputObj.value.trim() == null || inputObj.value.trim().length == 0)
        return true;
    else
        return false;
}

/* 
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u7a7a,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 * 
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f
 * \u4f8b\uff1acheck_empty('form1.userName','\u7528\u6237\u59d3\u540d');
 * \u4f8b\uff1acheck_empty('form1.userName|userAge|userAddress','\u7528\u6237\u59d3\u540d|\u7528\u6237\u5e74\u9f84|\u7528\u6237\u5730\u5740');
 * \u8868\u5355\u6837\u4f8b\uff1a
 * <form name='form1' action=''>
 *   \u7528\u6237\u59d3\u540d\uff1a<input type='text' value='' name='userName'>
 *   \u7528\u6237\u5e74\u9f84\uff1a<input type='text' value='' name='userAge'>
 *   \u7528\u6237\u5730\u5740\uff1a<input type='text' value='' name='userAddress'>
 * </form>
 */
function check_empty(inputname,msg)
{
    if(inputname.indexOf("|") == -1)
    {
        if(isEmpty(inputname))
        {
            alert(msg + ENTER_MSG + NOT_NULL);
            return false;
        }
        
        return true;
    }
    
    var split_inputname = inputname.split(".");
    var split_inputs = split_inputname[1].split("|");
    var split_msg = msg.split("|");
    var errmsg="";
    
    for (var i = 0; i < split_inputs.length; i++)
    {
        if(isEmpty(split_inputname[0]+"."+split_inputs[i]))
            errmsg = errmsg + split_msg[i] + "  ";
    }
    
    if(errmsg.length != 0)
    {
        alert(errmsg + ENTER_MSG + NOT_NULL);
        return false;
    }

    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u5b57\u7b26(\u4e25\u683c\u975e\u6cd5\u5b57\u7b26\u96c6)[]',^$\~:;!@?#%&<>''""
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a(\u5141\u8bb8\u4e2d\u6587\u6807\u70b9)
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_name('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_name('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_name(inputname,msg)
{
//	var const_arychar=new Array("[","]","^","$","\\","~","@","#","%","&","<",">");
	var const_arychar=new Array("[","]","^","$","\\","~","@","#","%","&","<",">","{","}",":","'","\"");
//	var const_arychar=new Array("[","]","'",",","^","$","\\","~",":",";","!","@","?","#","%","&","<",">","'","'","\"","\"" );
    var inputobj,inputvalue;
    
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0)
            return true;
    
        for (var i=0;i<const_arychar.length;i++)
        {
            if(inputvalue.indexOf(const_arychar[i])!=-1)
            {//find
                alert(msg + ENTER_MSG + ILLEGAL_CHAR);
                return false;			
            }
        }
        
        return true;
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0)
            continue;
        
        for (var j=0;j<const_arychar.length;j++)
        {
            if(inputvalue.indexOf(const_arychar[j])!=-1)
            {//find
                errmsg=errmsg+split_msg[i]+" ";
                break;			
            }
        }
    
    }
    
    if(errmsg!="")
    {
        alert(errmsg + ENTER_MSG + ILLEGAL_CHAR);
        return false;
    }
    
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u5b57\u7b26(\u5c0f\u989d\u53ca\u63a7\u5236\u5b57\u7b26\u975e\u6cd5\u5b57\u7b26\u96c6){}[]%'" \u0000-\u001F
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a(\u5141\u8bb8\u4e2d\u6587\u6807\u70b9)
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_name('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_name('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 * Add By Hongxf
 */
function check_name3(inputname,msg)
{
    var pattern;
       pattern = "^[^{}\\[\\]\\%\\'\\\"\\u0000-\\u001F]*$";

	if(inputname.indexOf("|")==-1)
    {
         inputobj=eval(CONST_STRDOC+inputname);
         inputvalue=inputobj.value;
        
         if(inputvalue.length==0)
             return true;
         return regex_match(inputname,msg,pattern);
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
   
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0){
            continue;
        }else if(!regex_match(split_inputname[0]+"."+split_inputs[i],split_msg[i],pattern)){
            return false;		
        }
    }
    
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u5b57\u7b26(\u9700\u6c42\u53d8\u66f4\u540e\u7684\u5c0f\u989d\u53ca\u63a7\u5236\u5b57\u7b26\u975e\u6cd5\u5b57\u7b26\u96c6){}[]%'" \u0000-\u001F \u65b0\u589e\u9650\u5236: `~$^_|\:
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a(\u5141\u8bb8\u4e2d\u6587\u6807\u70b9)
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_name('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_name('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 * Add By Hongxf
 */
function check_payee_name_xe(inputname,msg)
{
    var pattern;
       pattern = "^[^{}\\[\\]%'\"`~$^_|\\\\:\\u0000-\\u001F\\u0080-\\u00FF]{1,76}$";
	
	if(inputname.indexOf("|")==-1)
    {
         inputobj=eval(CONST_STRDOC+inputname);
         inputvalue=inputobj.value;
        
         if(inputvalue.length==0)
             return true;
         return regex_match(inputname,msg,pattern);
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
   
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0){
            continue;
        }else if(!regex_match(split_inputname[0]+"."+split_inputs[i],split_msg[i],pattern)){
            return false;		
        }
    }
    
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u5b57\u7b26(\u5c0f\u989d\u53ca\u63a7\u5236\u5b57\u7b26\u975e\u6cd5\u5b57\u7b26\u96c6){}[]%'" \u0000-\u001F \u65b0\u589e\u9650\u5236: `~$^_|\:oOiI
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a(\u5141\u8bb8\u4e2d\u6587\u6807\u70b9)
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_name('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_name('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 * Add By Hongxf
 */
function check_payee_name_xeoi(inputname,msg)
{
    var pattern;
       pattern = "^[^oOiI{}\\[\\]%'\"`~$^_|\\\\:\\u0000-\\u001F\\u0080-\\u00FF]{1,35}$";

	if(inputname.indexOf("|")==-1)
    {
         inputobj=eval(CONST_STRDOC+inputname);
         inputvalue=inputobj.value;
        
         if(inputvalue.length==0)
             return true;
         return regex_match(inputname,msg,pattern);
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
   
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0){
            continue;
        }else if(!regex_match(split_inputname[0]+"."+split_inputs[i],split_msg[i],pattern)){
            return false;		
        }
    }
    
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u5ba2\u6237\u7533\u8bf7\u53f7\u683c\u5f0f(1-10,4,90-100)
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *         \u6c47\u5212\u5373\u65f6\u901a\u67e5\u8be2\u5ba2\u6237\u7533\u8bf7\u53f7\u9700\u8981\u4f7f\u7528\u82f1\u6587\u9017\u53f7,\u6545\u5141\u8bb8\u82f1\u6587\u9017\u53f7
 *	        \u7981\u6b62\u4e2d\u6587\u6807\u70b9
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
             allowEng -- \u662f\u5426\u53ef\u4ee5\u542b\u6709\u82f1\u6587(0:\u53ef\u4ee5,1:\u4e0d\u53ef\u4ee5)
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_name2('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_name2('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 * modified by liuy
 */
function check_name2(inputname,msg,allowEng)
{
    var pattern;
    if(allowEng=="0"){
       pattern = "^[A-Za-z0-9]{1,16}(-[A-Za-z0-9]{1,16})?(,[A-Za-z0-9]{1,16}(-[A-Za-z0-9]{1,16})?)*$";
    }else if(allowEng=="1"){
       pattern = "^[0-9]{1,16}(-[0-9]{1,16})?(,[0-9]{1,16}(-[0-9]{1,16})?)*$";
    }
     if(inputname.indexOf("|")==-1)
     {
         inputobj=eval(CONST_STRDOC+inputname);
         inputvalue=inputobj.value;
        
         if(inputvalue.length==0)
             return true;
         return regex_match(inputname,msg,pattern);  
     }
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    
    for (var i=0;i<split_inputs.length;i++)
    {
   
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0){
            continue;
        }else if(!regex_match(split_inputname[0]+"."+split_inputs[i],split_msg[i],pattern)){
            return false;		
        }
       
    
    }
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u662f\u5426\u5b57\u7b26\u4e32\u4e2d\u6709\u4e2d\u6587,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5305\u542b\u4e2d\u6587
 *        true -- \u4e0d\u5305\u542b
 *
 * \u4f8b\uff1acheck_chinese('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_chinese('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_chinese(inputname,msg)
{
    var inputobj,inputvalue;
    
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);
        inputvalue=inputobj.value;
        if(inputvalue.length==0)
            return true;
        
        for (var i=0;i<inputvalue.length;i++)
        {
            if(inputvalue.charCodeAt(i)>255)
            {//find
                alert(msg + ENTER_MSG + HAVE_CHINESE);
                return false;			
            }
        }
        
        return true;
    }
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;

        if(inputvalue.length==0)
            continue;
    
        for (var j=0;j<inputvalue.length;j++)
        {
            if(inputvalue.charCodeAt(j)>255)
            {//find
                errmsg=errmsg+split_msg[i]+" ";
                break;			
            }
        }
    
    }

    if(errmsg!="")
    {
        alert(errmsg + ENTER_MSG + HAVE_CHINESE);
        return false;
    }

    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6570\u5b57,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5305\u542b\u975e\u6570\u5b57
 *        true -- \u4e0d\u5305\u542b
 *
 * \u4f8b\uff1acheck_number('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_number('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_number(inputname,msg)
{
    var inputobj,inputvalue;
    
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);
        inputvalue=inputobj.value;
        
        if(inputvalue.length==0)
            return true;
    
        for (var i=0;i<inputvalue.length;i++)
        {
            if(inputvalue.charCodeAt(i)>57 || inputvalue.charCodeAt(i)<48)
            {//find
                alert(msg + ENTER_MSG + NOT_NUMBER);
                return false;			
            }
        }
        
        return true;
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;

        if(inputvalue.length==0)
            continue;
    
        for (var j=0;j<inputvalue.length;j++)
        {
            if(inputvalue.charCodeAt(j)>57 || inputvalue.charCodeAt(j)<48)
            {//find
                errmsg=errmsg+split_msg[i]+" ";
                break;			
            }
        }
    }
    
    if(errmsg!="")
    {
        alert(errmsg + ENTER_MSG + NOT_NUMBER);
        return false;
    }

    return true;
}


/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u662f\u5426\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *			 pattern -- \u6b63\u5219\u8868\u8fbe\u5f0f
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1aregex_match('Form1.Input1','\u5b57\u6bb51','A-Z');
 * \u4f8b\uff1aregex_match('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53','A-Z');
 *
 */
function regex_match(inputname,msg,pattern)
{
	return regex_match_msg(inputname,msg,pattern,ILLEGAL_REGEX);
}


/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u662f\u5426\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *			 pattern -- \u6b63\u5219\u8868\u8fbe\u5f0f
 			warn -- \u9519\u8bef\u63d0\u793a
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1aregex_match_msg('Form1.Input1','\u5b57\u6bb51','A-Z','\u5fc5\u987b\u4e3a\u5b57\u6bcd');
 * \u4f8b\uff1aregex_match_msg('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53','A-Z','\u5fc5\u987b\u4e3a\u5b57\u6bcd');
 *
 */
function regex_match_msg(inputname,msg,pattern,warn)
{
    var inputobj,inputvalue;
    var regex = new RegExp(pattern);
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);
        inputvalue=inputobj.value;
        
        if (regex.test(inputvalue))
			return true;
			
        alert(msg + ENTER_MSG + warn);
        return false;			
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;
        
 //       if(inputvalue.length==0)
 //           continue;
        
        if (!regex.test(inputvalue))
        {
                errmsg=errmsg+split_msg[i]+" ";
                break;			
        }
    
    }
    
    if(errmsg=="")
    	return true;
    
	alert(errmsg + ENTER_MSG + warn);
    return false;

}


/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u957f\u5ea6\u662f\u5426\u7b49\u4e8e\u56fa\u5b9a\u957f\u5ea6,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           inputlength -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u6307\u5b9a\u56fa\u5b9a\u957f\u5ea6;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u7b49\u4e8e
 *        true -- \u7b49\u4e8e
 *
 * \u4f8b\uff1acheck_length('Form1.Input1','8','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_length('Form1.Input1|Input2|Input3','6|8|10','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_length(inputname,inputlength,msg)
{
    var inputobj;

    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);

        if((inputobj.value.length!=0) && (inputobj.value.length!=inputlength))
        {
            alert(msg + LENGTH_EQUAL_MSG + inputlength + COMMA_MSG + ENTER_MSG + MODIFY_MSG);
            return false;
        }

        return true;
    }
    
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_inputlength=inputlength.split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        
        if((inputobj.value.length!=0) && (inputobj.value.length!=split_inputlength[i]))
			errmsg=errmsg+split_msg[i] + LENGTH_EQUAL_MSG + split_inputlength[i] + COMMA_MSG + ENTER_MSG;
    }
    
    if(errmsg.length!=0)
    {
        alert(errmsg + MODIFY_MSG);
        return false;
    }

    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u957f\u5ea6\u662f\u5426\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u957f\u5ea6,\u63a7\u5236\u4e2d\u6587\u5b57\u7b26,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           inputlength -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u6307\u5b9a\u56fa\u5b9a\u957f\u5ea6;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5927\u4e8e\u6307\u5b9a\u957f\u5ea6
 *        true -- \u5c0f\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u957f\u5ea6
 *
 * \u4f8b\uff1acheck_length_zhCN('Form1.Input1','8','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_length_zhCN('Form1.Input1|Input2|Input3','6|8|10','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_length_zhCN(inputname,inputlength,msg)
{
	var inputobj;
	var inputValue;
	var inputLength = 0;

	if(inputname.indexOf("|")==-1)
	{
		inputobj=eval(CONST_STRDOC+inputname);
		
		if(inputobj.value.length != 0)
		{
			inputValue = inputobj.value;

			for(var i = 0; i < inputobj.value.length;i++)
			{
				if(inputValue.charCodeAt(i)>127) 
					inputLength++;
			 	
			 	inputLength++;
			}

			if (inputLength>inputlength)
			{
				alert(msg + LENGTH_MSG + inputlength + LENGTH_MSG1 + COMMA_MSG + ENTER_MSG + MODIFY_MSG);
				return false;
			}
		}
		
		return true;
	}
	
	var split_inputname=inputname.split(".");
	var split_inputs=split_inputname[1].split("|");
	var split_inputlength=inputlength.split("|");
	var split_msg=msg.split("|");
	var errmsg="";
	
	for (var i=0;i<split_inputs.length;i++)
	{
		inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);

		if(inputobj.value.length != 0)
		{
			inputValue = inputobj.value;

			for(var j = 0; j < inputobj.value.length;j++)
			{
				if(inputValue.charCodeAt(j)>127) 
					inputLength++;
			 	
			 	inputLength++;
			}

			if (inputLength > split_inputlength[i])
				errmsg=errmsg+split_msg[i] + LENGTH_MSG + split_inputlength[i] + LENGTH_MSG1 + COMMA_MSG + ENTER_MSG;

			inputLength = 0;
		}
	}
	
	if(errmsg.length!=0)
	{
		alert(errmsg + MODIFY_MSG);
		return false;
	}
	
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u957f\u5ea6\u662f\u5426\u5728\u6307\u5b9a\u957f\u5ea6\u4e4b\u95f4,\u63a7\u5236\u4e2d\u6587\u5b57\u7b26,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           inputlength1 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u6307\u5b9a\u56fa\u5b9a\u957f\u5ea6\u4e0b\u9650;
 *           inputlength2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u6307\u5b9a\u56fa\u5b9a\u957f\u5ea6\u4e0a\u9650;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u8d85\u51fa\u6307\u5b9a\u957f\u5ea6\u8303\u56f4
 *        true -- \u672a\u8d85\u51fa\u6307\u5b9a\u957f\u5ea6\u8303\u56f4
 *
 * \u4f8b\uff1acheck_length_period('Form1.Input1','2','8','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_length_period('Form1.Input1|Input2|Input3','2|2|2','6|8|10','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_length_period(inputname,inputlength1,inputlength2,msg)
{
	var inputobj;
	var inputValue;
	var inputLength = 0;

	if(inputname.indexOf("|")==-1)
	{
		inputobj=eval(CONST_STRDOC+inputname);
		
		if(inputobj.value.length != 0)
		{
			inputValue = inputobj.value;

			for(var i = 0; i < inputobj.value.length;i++)
			{
				if(inputValue.charCodeAt(i)>127) 
					inputLength++;
			 	
			 	inputLength++;
			}

			if (inputLength > inputlength2 || inputLength < inputlength1)
			{
				alert(msg + LENGHT_PERIOD_MSG + inputlength1 + MINUS_MSG + inputlength2 + COMMA_MSG + ENTER_MSG + MODIFY_MSG);
				return false;
			}
		}
		
		return true;
	}
	
	var split_inputname=inputname.split(".");
	var split_inputs=split_inputname[1].split("|");
	var split_inputlength1=inputlength1.split("|");
	var split_inputlength2=inputlength2.split("|");
	var split_msg=msg.split("|");
	var errmsg="";
	
	for (var i=0;i<split_inputs.length;i++)
	{
		inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);

		if(inputobj.value.length != 0)
		{
			inputValue = inputobj.value;

			for(var j = 0; j < inputobj.value.length;j++)
			{
				if(inputValue.charCodeAt(j)>127) 
					inputLength++;
			 	
			 	inputLength++;
			}

			if (inputLength > split_inputlength2[i] || inputLength < split_inputlength1[i])
				errmsg=errmsg+split_msg[i] + LENGHT_PERIOD_MSG + split_inputlength1[i] + MINUS_MSG + split_inputlength2[i] + COMMA_MSG + ENTER_MSG;

			inputLength = 0;
		}
	}
	
	if(errmsg.length!=0)
	{
		alert(errmsg + MODIFY_MSG);
		return false;
	}
	
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u91d1\u989d,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname1,inputname2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1,msg2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *           xflag -- 0:\u5355\u3001\u591a\u6587\u672c\u6846\u68c0\u67e5\u91d1\u989d\u662f\u5426\u5408\u6cd5\uff0c\u5355\u65f6inputname2\u548cmsg2\u7528 ''\u6216""\u8868\u793a;
 *                    1:\u4e24\u6587\u672c\u6846\u68c0\u67e5\u91d1\u989d\u662f\u5426\u5408\u6cd5\uff0c\u91d1\u989d\u4e0b\u9650\u662f\u5426\u5927\u4e8e\u91d1\u989d\u4e0a\u9650;
 *                    2:\u4e24\u6587\u672c\u6846\u68c0\u67e5\u91d1\u989d\u662f\u5426\u5408\u6cd5\uff0c\u91d1\u989d\u4e0a\u9650\u662f\u5426\u5c0f\u4e8e\u7b49\u4e8e\u91d1\u989d\u4e0b\u9650;
 *           curCode -- \u8d27\u5e01\u4ee3\u7801,\u4eba\u6c11\u5e01\u4e3a001
 *           minusFlag -- \u91d1\u989d\u662f\u5426\u53ef\u4ee5\u4e3a\u8d1f,true:\u53ef\u4ee5\u4e3a\u8d1f,false:\u4e0d\u80fd\u4e3a\u8d1f;
 *
 * Return false -- \u91d1\u989d\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_money(0,'Form1.Input1','','\u5b57\u6bb51','','001','false');
 * \u4f8b\uff1acheck_money(0,'Form1.Input1|Input2|Input3','','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53','','001','false');
 * \u4f8b\uff1acheck_money(1,'Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','001','false');
 * \u4f8b\uff1acheck_money(2,'Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','001','false');
 *
 */
function check_money(xflag,inputname1,inputname2,msg1,msg2,curCode,minusFlag)
{
    var curName, curLlen, curDec;
    
    for(var j = 0; j < curCodeArr.length; j++)
    {
        if (curCodeArr[j][0] == curCode)
        {
            curName = curCodeArr[j][1];
            curLlen = curCodeArr[j][2];
            curDec = curCodeArr[j][3];
            
            break;
        }
    }
    
    if(xflag == 0)
    {
        var inputobj;

        if(inputname1.indexOf("|")==-1)
        {
            inputobj = eval(CONST_STRDOC + inputname1);
        
            switch(moneyCheck(inputobj.value,curLlen,curDec,minusFlag,"true"))
            {
                case "b":
                   alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
                   return false;
                case "c":
                   alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
                   return false;
                case "d":
                   alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
                   return false;
                case "e":
                   alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
                   return false;
            }
            
            return true;
        }
    
        var split_inputname=inputname1.split(".");
        var split_inputs=split_inputname[1].split("|");
        var split_msg=msg1.split("|");
        var minusArr = minusFlag.split("|");
        var errmsg="";
    
        for (var i=0;i<split_inputs.length;i++)
        {
            inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
            
            switch(moneyCheck(inputobj.value,curLlen,curDec,minusArr[i],"true"))
            {
                case "b":
                   alert(split_msg[i] + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
                   return false;
                case "c":
                   alert(split_msg[i] + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
                   return false;
                case "d":
                   alert(split_msg[i] + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
                   return false;
                case "e":
                   alert(split_msg[i] + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
                   return false;
            }
        }
        
        return true;
    }
    
    //xflag=1
    if(xflag==1)
    {
        var inputobj1=eval(CONST_STRDOC+inputname1);
        var inputobj2=eval(CONST_STRDOC+inputname2);
        
        var inputvalue1 = moneyCheck(inputobj1.value,curLlen,curDec,minusFlag,"true");
        var inputvalue2 = moneyCheck(inputobj2.value,curLlen,curDec,minusFlag,"true");
        var errmsg="";
    
        switch(inputvalue1)
        {
            case "b":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
               return false;
            case "c":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
               return false;
            case "d":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
               return false;
            case "e":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
               return false;
        }

        switch(inputvalue2)
        {
            case "b":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
               return false;
            case "c":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
               return false;
            case "d":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
               return false;
            case "e":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
               return false;
        }
        
        if(inputvalue1 == 0 || inputvalue2 == 0)
            return true;

        if(inputvalue1 > inputvalue2 )
        {
            alert(msg2 + MONEY_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
            return false;
        }
        
        return true;
    }
    
    //xflag=2
    if(xflag==2)
    {
        var inputobj1=eval(CONST_STRDOC+inputname1);
        var inputobj2=eval(CONST_STRDOC+inputname2);
        
        var inputvalue1 = moneyCheck(inputobj1.value,curLlen,curDec,minusFlag,"true");
        var inputvalue2 = moneyCheck(inputobj2.value,curLlen,curDec,minusFlag,"true");
        var errmsg="";
    
        switch(inputvalue1)
        {
            case "b":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
               return false;
            case "c":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
               return false;
            case "d":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
               return false;
            case "e":
               alert(msg1 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
               return false;
        }

        switch(inputvalue2)
        {
            case "b":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG1);
               return false;
            case "c":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG2);
               return false;
            case "d":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG3);
               return false;
            case "e":
               alert(msg2 + "("+ curName + ")" + ":" + ENTER_MSG + MONEY_MSG4);
               return false;
        }
        
        if(inputvalue1 == 0 || inputvalue2 == 0)
            return true;

        if(inputvalue1 > inputvalue2 )
        {
            alert(msg1 + MONEY_MSG0 + msg2 + COMMA_MSG + MODIFY_MSG);
            return false;
        }
        
        return true;
    }
    
    return false;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u975e\u6cd5\u6c47\u7387,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *           curCode -- \u8d27\u5e01\u4ee3\u7801,\u4eba\u6c11\u5e01\u4e3a001
 *           emptyFlag -- \u57df\u662f\u5426\u53ef\u4ee5\u4e3a\u7a7a,true:\u53ef\u4ee5\u4e3a\u7a7a,false:\u4e0d\u80fd\u4e3a\u7a7a;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_exchangerate("Form1.Input1","\u5b57\u6bb51","027","false");
 * \u4f8b\uff1acheck_exchangerate("Form1.Input1|Input2|Input3","2|2|2","6|8|10","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_exchangerate(inputname,msg,curCode,emptyFlag)
{
    if(inputname.indexOf("|") == -1)
    {
        var inputobj;
        
        inputobj = eval(CONST_STRDOC + inputname);
        
        /** \u4e3a\u5916\u6c47\u529f\u80fd\u7279\u6b8a\u5904\u7406\uff0c\u5982\u679c\u9875\u9762\u4e0a\u6709\u540c\u540d\u7684input\u57df\uff0c\u5219\u53d6\u7b2c\u4e00\u4e2a\u975edisabled\u7684\u4e3a\u5224\u65ad\u4f9d\u636e */
        if (inputobj.length != null)
        {
            for(var i = 0; i < inputobj.length; i++)
            {
                if (!inputobj[i].disabled)
                {
                    inputobj = inputobj[i];
                    break;
                }
            }
        }
                
        var curLen = 3;
        var curDec = 4;
        
        if (curCode == "027")
        {
            curLen = 3;
            curDec = 2;
        }
            
        switch(moneyCheck(inputobj.value,curLen,curDec,"false","false"))
        {
            case "a":
                if (emptyFlag == "false")
                    alert(msg + ENTER_MSG + NOT_NULL);
                return false;
            case "b":
               alert(msg + ":" + ENTER_MSG + EXCHANGERATE_MSG1);
               return false;
            case "c":
               alert(msg + ":" + ENTER_MSG + EXCHANGERATE_MSG2);
               return false;
            case "d":
               alert(msg + ":" + ENTER_MSG + EXCHANGERATE_MSG3);
               return false;
            case "e":
               alert(msg + ":" + ENTER_MSG + EXCHANGERATE_MSG4);
               return false;
        }
        
        return true;
    }

    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var curCodeArr=curCode.split("|");
    var emptyFlagArr = emptyFlag.split("|");
    var errmsg="";

    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        
        var curLen = 3;
        var curDec = 4;
        
        if (curCodeArr[i] == "027")
        {
            curLen = 3;
            curDec = 2;
        }

        switch(moneyCheck(inputobj.value,curLen,curDec,"false","false"))
        {
            case "a":
                if (emptyFlagArr[i] == "false")
                    alert(split_msg[i] + ENTER_MSG + NOT_NULL);
                return false;
            case "b":
               alert(split_msg[i] + ":" + ENTER_MSG + EXCHANGERATE_MSG1);
               return false;
            case "c":
               alert(split_msg[i] + ":" + ENTER_MSG + EXCHANGERATE_MSG2);
               return false;
            case "d":
               alert(split_msg[i] + ":" + ENTER_MSG + EXCHANGERATE_MSG3);
               return false;
            case "e":
               alert(split_msg[i] + ":" + ENTER_MSG + EXCHANGERATE_MSG4);
               return false;
        }
    }
    
    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u624b\u673a\u53f7,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 * \u4f8b\uff1acheck_mobile("Form1.Input1","\u5b57\u6bb51");
 * \u4f8b\uff1acheck_mobile("Form1.Input1|Input2|Input3","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_mobile(inputname,msg)
{
	return regex_match(inputname,msg,"^([0-9]{11})?$");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u8eab\u4efd\u8bc1\u53f7,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 * \u4f8b\uff1acheck_identify("Form1.Input1","\u5b57\u6bb51");
 * \u4f8b\uff1acheck_identify("Form1.Input1|Input2|Input3","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_identify(inputname,msg)
{
	return regex_match(inputname,msg,"^(\\d{15}|\\d{17}[0-9Xx])?$");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5EMAIL,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 * \u4f8b\uff1acheck_email("Form1.Input1","\u5b57\u6bb51");
 * \u4f8b\uff1acheck_email("Form1.Input1|Input2|Input3","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_email(inputname,msg)
{
	return regex_match(inputname,msg,"^(\\S+@\\S+)?$");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5E-token,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 * \u4f8b\uff1acheck_etoken("Form1.Input1","\u5b57\u6bb51");
 * \u4f8b\uff1acheck_etoken("Form1.Input1|Input2|Input3","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_etoken(inputname,msg)
{
	return regex_match(inputname,msg,"^[0-9A-Za-z+=/]{6,12}$");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u6d77\u5916\u4e2a\u4eba\u8f6c\u8d26\u6458\u8981,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 * \u4f8b\uff1acheck_englishForBoc2000("Form1.Input1","\u5b57\u6bb51");
 * \u4f8b\uff1acheck_englishForBoc2000("Form1.Input1|Input2|Input3","\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53");
 *
 */
function check_englishForBoc2000(inputname,msg)
{

	return regex_match(inputname,msg,"^[ A-Za-z0-9-().,'//s/?/+//]*$");
}

/**
 * \u51fd\u6570\u529f\u80fd\uff1a\u5b9e\u73b0check_date\u51fd\u6570\u7684\u91cd\u8f7d,\u672c\u51fd\u6570\u6839\u636echeck_date(arg1,arg2.....)\u4e2d\u53c2\u6570\u7684\u4e2a\u6570,\u5206\u522b\u8c03\u7528\u4e0d\u540c\u7684\u51fd\u6570,\u5206\u522b\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd:
 *
 * 1. \u4ec5\u68c0\u67e5\u4e00\u4e2a\u65e5\u671f\u8f93\u5165\u57df\u662f\u5426\u5408\u6cd5:function checkDateSingle(inputname1,msg1)
 * 2. \u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u8f93\u5165\u57df(\u8d77\u59cb/\u622a\u6b62\u65e5\u671f)\u662f\u5426\u5408\u6cd5,\u4e14\u622a\u6b62\u665a\u4e8e\u8d77\u59cb:function checkDateTwo(inputname1,inputname2,msg1,msg2)
 * 3. \u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u8f93\u5165\u57df\u662f\u5426\u5408\u6cd5\u3001\u622a\u6b62\u662f\u5426\u665a\u4e8e\u8d77\u59cb\u3001\u65e5\u671f\u8de8\u5ea6\u4e3a\u82e5\u5e72\u6708\uff1a
 * 4. \u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5\u3001\u622a\u6b62\u662f\u5426\u665a\u4e8e\u8d77\u59cb\u3001\u540c\u65f6\u9650\u5236\u622a\u6b62\u65e5\u671f\u548c\u8d77\u59cb\u65e5\u671f\u7684\u8303\u56f4\u662f\u5426\u5728\u67d0\u4e2a\u65e5\u671f\uff08limitDate\uff09\u4e4b\u5185\uff0c\u8de8\u5ea6\u4e3aperiod:
 *    function checkDateTwoLimit(inputname1,inputname2,msg1,msg2,limitDate,period)
 * 5. \u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5\u3001\u622a\u6b62\u662f\u5426\u665a\u4e8e\u8d77\u59cb\u3001\u65e5\u671f\u8de8\u5ea6\u4e3a\u82e5\u5e72\u6708\u3001\u4e14\u53ef\u67e5\u8be2\u8303\u56f4\u662f\u5426\u5728\u67d0\u4e2a\u65e5\u671f\uff08limitDate\uff09\u4e4b\u5185\uff0c\u8de8\u5ea6\u4e3aperiod,\u67e5\u8be2\u8303\u56f4\u4e3ayPeriod
 *    function checkDatePeriodLimit(inputname1,inputname2,msg1,msg2,limitDate,period,yPeriod)
 *
 * 
 * Parameter \u53c2\u6570\u542b\u4e49\u89c1\u5404\u51fd\u6570\u6ce8\u91ca
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1a1. check_date('Form1.Input1','\u5b57\u6bb51');
 * 		  check_date('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 *     2. check_date('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52');
 *
 *     3. check_date('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52',3);
 *
 *     4. check_date('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','2007/07/27',6);
 *
 *     5. check_date('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','2007/07/27',6,-12);
 */
 
function check_date()
{
	switch (arguments.length)
	{
		/** \u5982\u679c\u53c2\u6570\u4e2a\u6570\u4e3a2,\u8c03\u7528\u76f8\u5e94\u51fd\u6570\u5904\u7406 */
		case 2:
			return checkDateSingle(arguments[0],arguments[1]);
			break;
		/** \u5982\u679c\u53c2\u6570\u4e2a\u6570\u4e3a4,\u8c03\u7528\u76f8\u5e94\u51fd\u6570\u5904\u7406 */
		case 4:
			return checkDateTwo(arguments[0],arguments[1],arguments[2],arguments[3]);
			break;
		/** \u5982\u679c\u53c2\u6570\u4e2a\u6570\u4e3a5,\u8c03\u7528\u76f8\u5e94\u51fd\u6570\u5904\u7406 */
		case 5:
			return checkDateTwoPeriod(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
			break;
		/** \u5982\u679c\u53c2\u6570\u4e2a\u6570\u4e3a6,\u8c03\u7528\u76f8\u5e94\u51fd\u6570\u5904\u7406 */
		case 6:
			return checkDateTwoLimit(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
			break;
		/** \u5982\u679c\u53c2\u6570\u4e2a\u6570\u4e3a7,\u8c03\u7528\u76f8\u5e94\u51fd\u6570\u5904\u7406 */
		case 7:
			return checkDatePeriodLimit(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
			break;
		default:
			return false;
	}
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5date,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname1 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDateSingle('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheckDateSingle('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function checkDateSingle(inputname1,msg1)
{
	var inputobj;
	var inputvalue;
	
	if(inputname1.indexOf("|")==-1)
	{
	    
	    inputobj=eval(CONST_STRDOC+inputname1);
	    inputvalue = isdate(inputobj.value);
	    
	    if(typeof(inputvalue) == "number" && inputvalue < 0)
	    {
	        alert(msg1 + ENTER_MSG + ILLEGAL_DATE);
	        return false;
	    }
	    
	    return true;
	}
	
	var split_inputname=inputname1.split(".");
	var split_inputs=split_inputname[1].split("|");
	var split_msg=msg1.split("|");
	var errmsg="";
	
	for (var i=0;i<split_inputs.length;i++)
	{
	    inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
	    inputvalue = isdate(inputobj.value);
	
	    if(typeof(inputvalue) == "number" && inputvalue < 0)
	        errmsg=errmsg+split_msg[i]+" ";
	}
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5date,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a,\u4e3b\u8981\u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5\uff0c\u5224\u65ad\u622a\u6b62\u65e5\u671f>\u5f00\u59cb\u65e5\u671f
 *
 * Parameter inputname1,inputname2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1,msg2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDateTwo('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52');
 *
 */
function checkDateTwo(inputname1,inputname2,msg1,msg2)
{
	var inputobj1=eval(CONST_STRDOC+inputname1);
	var inputobj2=eval(CONST_STRDOC+inputname2);
	var inputvalue1=isdate(inputobj1.value);
	var inputvalue2=isdate(inputobj2.value);

	var errmsg="";
	
	if(typeof(inputvalue1) == "number" && inputvalue1 < 0)
	    errmsg=errmsg+msg1+" ";
	
	if(typeof(inputvalue2) == "number" && inputvalue2 < 0)
	    errmsg=errmsg+msg2+" ";
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	if(typeof(inputvalue1) == "number" && inputvalue1 == 0 && typeof(inputvalue2) == "number" && inputvalue2 == 0)
	    return true;

	if(inputvalue2 < inputvalue1)
	{
	    alert(msg2 + DATE_LATER_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
	    return false;
	}
	
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5date,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a,\u4e3b\u8981\u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5,\u540c\u65f6\u9650\u5236\u622a\u6b62\u65e5\u671f\u548c\u8d77\u59cb\u65e5\u671f\u7684\u8303\u56f4
 *
 * Parameter inputname1,inputname2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1,msg2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *			 period -- \u8d77\u59cb\u65e5\u671f/\u622a\u6b62\u65e5\u671f\u7684\u8de8\u5ea6,\u4ee5\u6708\u4e3a\u5355\u4f4d,\u5982:period=3,\u8868\u793a3\u4e2a\u6708
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDateTwoPeriod('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52',3);
 *
 */
function checkDateTwoPeriod(inputname1,inputname2,msg1,msg2,period)
{
	var inputobj1=eval(CONST_STRDOC+inputname1);
	var inputobj2=eval(CONST_STRDOC+inputname2);
	var inputvalue1=isdate(inputobj1.value);
	var inputvalue2=isdate(inputobj2.value);
	
	var errmsg="";
	
	if(typeof(inputvalue1) == "number" && inputvalue1 < 0)
	    errmsg=errmsg+msg1+" ";
	
	if(typeof(inputvalue2) == "number" && inputvalue2 < 0)
	    errmsg=errmsg+msg2+" ";
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	if(typeof(inputvalue1) == "number" && inputvalue1 == 0 && typeof(inputvalue2) == "number" && inputvalue2 == 0)
	    return true;

	if(inputvalue2 < inputvalue1)
	{
	    alert(msg2 + DATE_LATER_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
	    return false;
	}

	if (addDate("m",inputvalue1,period) < inputvalue2)
	{
		alert(ILLEGAL_DATE_PERIOD + period + ENTRIES + MONTH + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5date,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a,\u4e3b\u8981\u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5,\u540c\u65f6\u9650\u5236\u622a\u6b62\u65e5\u671f\u548c\u8d77\u59cb\u65e5\u671f\u7684\u8303\u56f4
 *
 * Parameter inputname1,inputname2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1,msg2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *           limitDate -- \u622a\u6b62\u65e5\u671f\u7684\u6700\u5927\u503c;
 *			 period -- \u8d77\u59cb\u65e5\u671f/\u622a\u6b62\u65e5\u671f\u7684\u8de8\u5ea6,\u4ee5\u6708\u4e3a\u5355\u4f4d,\u5982:period=3,\u8868\u793a3\u4e2a\u6708
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDateTwoLimit('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','2007/07/27',6);
 *
 */
function checkDateTwoLimit(inputname1,inputname2,msg1,msg2,limitDate,period)
{
	var inputobj1=eval(CONST_STRDOC+inputname1);
	var inputobj2=eval(CONST_STRDOC+inputname2);
	var inputvalue1=isdate(inputobj1.value);
	var inputvalue2=isdate(inputobj2.value);
	
	var errmsg="";
	
	if(typeof(inputvalue1) == "number" && inputvalue1 < 0)
	    errmsg=errmsg+msg1+" ";
	
	if(typeof(inputvalue2) == "number" && inputvalue2 < 0)
	    errmsg=errmsg+msg2+" ";
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	if(typeof(inputvalue1) == "number" && inputvalue1 == 0 && typeof(inputvalue2) == "number" && inputvalue2 == 0)
	    return true;

	var limitEndDateValue = isdate(limitDate);
	var limitStartDateValue = addDate("m",isdate(limitDate),0-period);

	var limitStartDate = date2string(limitStartDateValue,"/");

	if(inputvalue2 < inputvalue1)
	{
	    alert(msg2 + DATE_LATER_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
	    return false;
	}

	if (limitEndDateValue < inputvalue2)
	{
		alert(msg2 + DATE_NOTLATER_MSG + limitDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	if (inputvalue1 < limitStartDateValue)
	{
		alert(msg1 + DATE_LATER_MSG + limitStartDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}
		
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5date,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a,\u4e3b\u8981\u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5,\u540c\u65f6\u9650\u5236\u622a\u6b62\u65e5\u671f\u548c\u8d77\u59cb\u65e5\u671f\u7684\u8303\u56f4
 *
 * Parameter inputname1,inputname2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg1,msg2 -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *           limitDate -- \u67e5\u8be2\u8303\u56f4\u7684\u8d77\u59cb\u65e5\u671f;
 *			 period -- \u8d77\u59cb\u65e5\u671f/\u622a\u6b62\u65e5\u671f\u7684\u8de8\u5ea6,\u4ee5\u6708\u4e3a\u5355\u4f4d,\u5982:period=3,\u8868\u793a3\u4e2a\u6708
 *           yPeriod -- \u67e5\u8be2\u8303\u56f4,\u6708\u4e3a\u5355\u4f4d,-12\u8868\u793a\u4ecelimitDate\u5f80\u524d\u4e00\u5e74,12\u8868\u793a\u4ecelimitDate\u5f80\u540e\u4e00\u5e74
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDateTwoLimit('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','2007/07/27',3,-12);
 *
 */
function checkDatePeriodLimit(inputname1,inputname2,msg1,msg2,limitDate,period,yPeriod)
{
	var inputobj1=eval(CONST_STRDOC+inputname1);
	var inputobj2=eval(CONST_STRDOC+inputname2);
	var inputvalue1=isdate(inputobj1.value);
	var inputvalue2=isdate(inputobj2.value);
	
	var errmsg="";
	
	if(typeof(inputvalue1) == "number" && inputvalue1 < 0)
	    errmsg=errmsg+msg1+" ";
	
	if(typeof(inputvalue2) == "number" && inputvalue2 < 0)
	    errmsg=errmsg+msg2+" ";
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	if(typeof(inputvalue1) == "number" && inputvalue1 == 0 && typeof(inputvalue2) == "number" && inputvalue2 == 0)
	    return true;

	var limitEndDateValue = null;
	var limitStartDateValue = null;
	
	if (yPeriod >= 0)
	{
    	limitStartDateValue = isdate(limitDate);
    	limitEndDateValue = addDate("m",isdate(limitDate),yPeriod);
	}
	else
	{
    	limitEndDateValue = isdate(limitDate);
    	limitStartDateValue = addDate("m",isdate(limitDate),yPeriod);
	}

	var limitStartDate = date2string(limitStartDateValue,"/");
	var limitEndDate = date2string(limitEndDateValue,"/");

	if(inputvalue2 < inputvalue1)
	{
	    alert(msg2 + DATE_LATER_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
	    return false;
	}

	if (addDate("m",inputvalue1,period) < inputvalue2)
	{
		alert(ILLEGAL_DATE_PERIOD + period + ENTRIES + MONTH + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	if (limitEndDateValue < inputvalue2)
	{
		alert(msg2 + DATE_NOTLATER_MSG + limitEndDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	if (inputvalue1 < limitStartDateValue)
	{
		alert(msg1 + DATE_LATER_MSG + limitStartDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}
		
		
	return true;
}

/**
 * \u51fd\u6570\u529f\u80fd\uff1a\u4fee\u6539checkDatePeriodLimit\u51fd\u6570\u529f\u80fd,\u8de8\u5ea6\u65e5\u671f\u5355\u4f4d\u7531\u6708\u6539\u4e3a\u65e5,\u53ef\u4ee5\u5b9e\u73b0"\u8d77\u59cb\u622a\u81f3\u65e5\u671f\u95f4\u9694\u4e0d\u80fd\u8d85\u8fc7XX\u5929"\u7c7b\u7684\u9700\u6c42
 *
 * \u529f\u80fd: \u68c0\u67e5\u4e24\u4e2a\u65e5\u671f\u662f\u5426\u5408\u6cd5\u3001\u622a\u6b62\u662f\u5426\u665a\u4e8e\u8d77\u59cb\u3001\u65e5\u671f\u8de8\u5ea6\u4e3a\u82e5\u5e72\u5929\u3001\u4e14\u53ef\u67e5\u8be2\u8303\u56f4\u662f\u5426\u5728\u4ee5\u67d0\u4e2a\u65e5\u671f\uff08limitDate\uff09\u4e3a\u57fa\u51c6,\u8303\u56f4\u5728(yPeriod)\u4e4b\u5185,\u8d77\u59cb\u622a\u81f3\u65e5\u671f\u8de8\u5ea6\u4e3aperiod
 *    function checkDatePeriodLimitByDay(inputname1,inputname2,msg1,msg2,limitDate,period,yPeriod)
 *
 * 
 * Parameter:
 *   1.inputname1: \u8d77\u59cb\u65e5\u671f\u8f93\u5165\u57df\u540d\u79f0
 *   2.inputname2: \u622a\u81f3\u65e5\u671f\u8f93\u5165\u57df\u540d\u79f0
 *   3.msg1: \u63d0\u793a\u4fe1\u606f\u4e2d,\u5bf9\u4e8e\u8d77\u59cb\u65e5\u671f\u7684\u7ffb\u8bd1
 *   4.msg2: \u63d0\u793a\u4fe1\u606f\u4e2d,\u5bf9\u4e8e\u622a\u81f3\u65e5\u671f\u7684\u7ffb\u8bd1
 *   5.limitDate: \u5982\u679c\u67e5\u8be2\u8303\u56f4(yPeriod)>=0,\u5219\u4e3a\u67e5\u8be2\u8303\u56f4\u7684\u8d77\u59cb\u65e5\u671f,\u6839\u636eyPeriod\u987a\u5ef6\u4e4b\u540e\u7684\u65e5\u671f\u4e3a\u67e5\u8be2\u8303\u56f4\u7684\u622a\u81f3\u65e5\u671f;
 *                \u5982\u679c\u67e5\u8be2\u8303\u56f4(yPeriod)<0,\u5219\u4e3a\u67e5\u8be2\u8303\u56f4\u7684\u622a\u81f3\u65e5\u671f,\u6839\u636eyPeriod\u63d0\u524d\u7684\u65e5\u671f\u4e3a\u67e5\u8be2\u8303\u56f4\u7684\u8d77\u59cb\u65e5\u671f
 *   6.period: \u7528\u6237\u8f93\u5165\u7684\u8d77\u59cb\u622a\u81f3\u65e5\u671f\u4e4b\u95f4\u7684\u8de8\u5ea6,\u5355\u4f4d\u4e3a"\u5929"
 *   7.yPeriod: \u67e5\u8be2\u8303\u56f4,\u5173\u8054limitDate\u5224\u65ad,\u5355\u4f4d\u4e3a"\u6708"
 *
 * Return false -- \u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheckDatePeriodLimitByDay('Form1.Input1','Form1.Input2','\u5b57\u6bb51','\u5b57\u6bb52','2007/07/27',15,-12);
 */
function checkDatePeriodLimitByDay (inputname1,inputname2,msg1,msg2,limitDate,period,yPeriod) {
	
	var inputobj1=eval(CONST_STRDOC+inputname1);
	var inputobj2=eval(CONST_STRDOC+inputname2);
	var inputvalue1=isdate(inputobj1.value);
	var inputvalue2=isdate(inputobj2.value);
	
	var errmsg="";
	
	if(typeof(inputvalue1) == "number" && inputvalue1 < 0)
	    errmsg=errmsg+msg1+" ";
	
	if(typeof(inputvalue2) == "number" && inputvalue2 < 0)
	    errmsg=errmsg+msg2+" ";
	
	if(errmsg!="")
	{
	    alert(errmsg + ENTER_MSG + ILLEGAL_DATE);
	    return false;
	}
	
	if(typeof(inputvalue1) == "number" && inputvalue1 == 0 && typeof(inputvalue2) == "number" && inputvalue2 == 0)
	    return true;

	var limitEndDateValue = null;
	var limitStartDateValue = null;
	
	if (yPeriod >= 0)
	{
    	limitStartDateValue = isdate(limitDate);
    	limitEndDateValue = addDate("m",isdate(limitDate),yPeriod);
	}
	else
	{
    	limitEndDateValue = isdate(limitDate);
    	limitStartDateValue = addDate("m",isdate(limitDate),yPeriod);
	}

	var limitStartDate = date2string(limitStartDateValue,"/");
	var limitEndDate = date2string(limitEndDateValue,"/");

	if(inputvalue2 < inputvalue1)
	{
	    alert(msg2 + DATE_LATER_MSG + msg1 + COMMA_MSG + MODIFY_MSG);
	    return false;
	}
	
	if (addDate("d",inputvalue1,period) < inputvalue2)
	{
		alert(ILLEGAL_DATE_PERIOD + period + DAY + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	if (limitEndDateValue < inputvalue2)
	{
		alert(msg2 + DATE_NOTLATER_MSG + limitEndDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}

	if (inputvalue1 < limitStartDateValue)
	{
		alert(msg1 + DATE_LATER_MSG + limitStartDate + COMMA_MSG + MODIFY_MSG);
		return false;
	}
		
	return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u65e5\u671f\u6570\u636e,\u83b7\u5f97\u8fd4\u56de\u503c
 *
 * Parameter onestring -- \u9700\u5224\u65ad\u7684\u5b57\u7b26\u4e32;
 *
 * Return 0 -- \u5b57\u7b26\u4e32\u4e3a\u7a7a
 *        -1 -- \u5b57\u7b26\u4e32\u975e\u65e5\u671f\u6570\u636e
 *        \u65e5\u671f\u503c -- \u5b57\u7b26\u4e32\u4e3a\u65e5\u671f\u6570\u636e\uff0c\u5e76\u83b7\u5f97\u65e5\u671f\u503c
 *
 * \u4f8b\uff1aisdate("2000/01/01")  \u8fd4\u56de20000101
 * \u4f8b\uff1aisdate("")  \u8fd4\u56de0
 * \u4f8b\uff1aisdate("abc")  \u8fd4\u56de-1   
 *
 */
function isdate(onestring)
{
    if(onestring.length == 0)
        return 0;

    if(onestring.length != 10)
        return -1;
    
	var pattern = /\d{4}\/\d{2}\/\d{2}/;
	
	if(!pattern.test(onestring)) 
		return -1;
	
	var arrDate = onestring.split("/");

	if(parseInt(arrDate[0],10) < 100) 
		arrDate[0] = 2000 + parseInt(arrDate[0],10) + "";
	
	var newdate = new Date(arrDate[0],(parseInt(arrDate[1],10) -1)+"",arrDate[2]);
	
	if(newdate.getFullYear() == arrDate[0] && newdate.getMonth() == (parseInt(arrDate[1],10) -1)+"" && newdate.getDate() == arrDate[2])
		return newdate;
	else
		return -1;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u662f\u5426\u5b57\u7b26\u4e32\u5168\u4e3a\u4e2d\u6587,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5305\u542b\u975e\u4e2d\u6587
 *        true -- \u5168\u4e3a\u4e2d\u6587
 *
 * \u4f8b\uff1acheck_chinese_only('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_chinese_only('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_chinese_only(inputname,msg)
{
    var inputobj,inputvalue;
    
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);
        inputvalue=inputobj.value;
        if(inputvalue.length==0)
            return true;
        
        for (var i=0;i<inputvalue.length;i++)
        {
            if(inputvalue.charCodeAt(i)<=255)
            {//find
                alert(msg + ENTER_MSG + NOT_ONLY_CHINESE);
                return false;			
            }
        }
        
        return true;
    }
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_msg=msg.split("|");
    var errmsg="";
    
    for (var i=0;i<split_inputs.length;i++)
    {
        inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
        inputvalue=inputobj.value;

        if(inputvalue.length==0)
            continue;
    
        for (var j=0;j<inputvalue.length;j++)
        {
            if(inputvalue.charCodeAt(j)>255)
            {//find
                errmsg=errmsg+split_msg[i]+" ";
                break;			
            }
        }
    
    }

    if(errmsg!="")
    {
        alert(errmsg + ENTER_MSG + NOT_ONLY_CHINESE);
        return false;
    }

    return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6570\u5b57\u3001\u52a0\u53f7\u3001\u7a7a\u683c\u3001\u6a2a\u7ebf,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5305\u542b\u6570\u5b57\u3001\u52a0\u53f7\u3001\u7a7a\u683c\u3001\u6a2a\u7ebf\u4ee5\u5916\u7684\u5b57\u7b26
 *        true -- \u4e0d\u5305\u542b
 *
 * \u4f8b\uff1acheck_phone('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_phone('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_phone(inputname,msg)
{
    return regex_match(inputname,msg,"[ 0-9-///+]*$");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5224\u65ad\u91d1\u989d\u7684\u5408\u6cd5\u6027,\u540c\u65f6\u6269\u5c55\u4e3a\u666e\u901a\u6d6e\u70b9\u6570\u7684\u68c0\u67e5(\u79c1\u6709\u51fd\u6570\uff0c\u8bf7\u52ff\u8c03\u7528)
 *
 * Parameter str -- \u9700\u5224\u65ad\u7684\u5b57\u7b26\u4e32;
 *           llen -- \u91d1\u989d\u6574\u6570\u90e8\u5206\u7684\u957f\u5ea6;
 *           dec -- \u8f85\u5e01\u4f4d\u6570;
 *           minusFlag -- \u91d1\u989d\u662f\u5426\u53ef\u4ee5\u4e3a\u8d1f,true:\u53ef\u4ee5\u4e3a\u8d1f,false:\u4e0d\u80fd\u4e3a\u8d1f;
 *           isFormatMoney -- \u662f\u5426\u662f\u683c\u5f0f\u5316\u91d1\u989d,true:\u662f,false:\u5426;\u5982\u679c\u4e3a\u5426\uff0c\u53ef\u7528\u505a\u666e\u901a\u6d6e\u70b9\u6570\u7684\u5224\u65ad
 *
 * Return a -- \u5b57\u7b26\u4e32\u4e3a\u7a7a
 *        b -- \u5b57\u7b26\u4e32\u975e\u6570\u503c\u6570\u636e
 *        c -- \u91d1\u989d\u4e3a\u8d1f
 *        d -- \u6574\u6570\u90e8\u5206\u8d85\u957f
 *        e -- \u5c0f\u6570\u90e8\u5206\u8d85\u957f
 *        \u6570\u503c -- \u5b57\u7b26\u4e32\u4e3a\u6570\u503c\u6570\u636e\uff0c\u5e76\u83b7\u5f97\u8f6c\u6362\u540e\u7684\u6570\u503c
 *
 * \u4f8b\uff1amoneyCheck("123,456,789.34",13,2)  \u8fd4\u56de123456789.34
 *
 */
function moneyCheck(str,llen,dec,minusFlag,isFormatMoney)
{
    if(str == null || str == "")
        return "a";
        
    if(str.length!=0&&str.trim().length == 0)
    	return "b";
    
    var regex;
    
    if (isFormatMoney == "true")
        regex = new RegExp(/(?!^[-]?[0,]*(\.0{1,4})?$)^[-]?(([1-9]\d{0,2}(,\d{3})*)|([1-9]\d*)|0)(\.\d{1,4})?$/);
    else
        regex = new RegExp(/(?!^[-]?[0]*(\.0{1,4})?$)^[-]?(([1-9]\d*)|0)(\.\d{1,4})?$/);
    
    if (!regex.test(str))
        return "b";
    
    var minus = "";

    if (minusFlag == "true")
    {
        if(str.substring(0,1) == "-")
        {
            minus = "-";
            str = str.substring(1);
        }
    }
    else
    {
        if(str.substring(0,1) == "-")
            return "c";
    }
                
    if (str.substring(0,1)==".")
        str = "0" + str;	
    
    str = replace(str,",","");

    if (str.indexOf(".") == -1)
    {
        if (str.length > llen)
            return "d";
        
        return parseFloat(minus + str);
    }
    else
    {
        var tmp = str.split(".");
    
        if(tmp.length > 2)
            return "b";
        
        if (tmp[0].length > llen)
            return "d";
            
        if (tmp[1].length > dec)
            return "e";
            
        return  parseFloat(minus + tmp[0] + "." + tmp[1]);
    }
}
/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u534a\u89d2\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5168\u89d2\u5b57\u7b26\u4e32(\u516c\u6709\u51fd\u6570\uff0c\u8bf7\u8c03\u7528)
 *
 * Parameter str -- \u9700\u8981\u8f6c\u6362\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u534a\u89d2\u5168\u89d2\u6df7\u5408\u5b57\u7b26\u4e32
 *           flag -- \u8f6c\u6362\u6807\u8bc6\uff0c0\u4e3a\u8f6c\u6362
 *          
 * Return \u5168\u89d2\u5b57\u7b26
 *
 * \u4f8b\uff1aDBC2SBC("abcdefg",0)  \u8fd4\u56de\uff41\uff42\uff43\uff44\uff45\uff46\uff47
 *
 */
function DBC2SBC(str,flag) {
    var i;
    var result='';
    if(str.length<=0) {        
        return result;
    }
    for(i=0;i<str.length;i++){
      str1=str.charCodeAt(i);
      if(str1<125&&!flag){
    	if(str1==32){//\u5982\u679c\u662f\u534a\u89d2\u7a7a\u683c\uff0c\u7279\u6b8a\u5904\u7406
    		result+=String.fromCharCode(12288);
    	}else{
    		result+=String.fromCharCode(str.charCodeAt(i)+65248);
    	}    	
      }else{
        result+=String.fromCharCode(str.charCodeAt(i));
      }
    }
    return result;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u957f\u5ea6\u662f\u5426\u7b49\u4e8e\u679a\u4e3e\u56fa\u5b9a\u957f\u5ea6,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           inputlength -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u6307\u5b9a\u679a\u4e3e\u56fa\u5b9a\u957f\u5ea6;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u7b49\u4e8e
 *        true -- \u7b49\u4e8e
 *
 * \u4f8b\uff1acheck_length('Form1.Input1','6|8|10','\u5b57\u6bb51');
 *
 */
function check_lengthEnum(inputname,inputlength,msg)
{
    var inputobj;
/*
    if(inputname.indexOf("|")==-1)
    {
        inputobj=eval(CONST_STRDOC+inputname);

        if((inputobj.value.length!=0) && (inputobj.value.length!=inputlength))
        {
            alert(msg + LENGTH_EQUAL_MSG + inputlength + COMMA_MSG + ENTER_MSG + MODIFY_MSG);
            return false;
        }

        return true;
    }*/
    var split_inputname=inputname.split(".");
    var split_inputs=split_inputname[1].split("|");
    var split_inputlength=inputlength.split("|");
    var split_msg=msg.split("|");
    
    var errmsg=FORMAT_ERROR.replace("{0}",msg);
    
    inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[0]);

    for (var i=0;i<split_inputlength.length;i++)
    {
        if(inputobj.value.length==split_inputlength[i])
        {
        	errmsg="";
        	break
        }
			//errmsg=errmsg+split_msg[i] + LENGTH_EQUAL_MSG + split_inputlength[i] + COMMA_MSG + ENTER_MSG;
    }
    
    if(errmsg.length!=0)
    {
        alert(errmsg + MODIFY_MSG);
        return false;
    }

    return true;
}

/*
 *\u51fd\u6570\u529f\u80fd\uff1a\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u7a7a\u767d\u7b26(\u5b57\u7b26\u4e32\u524d\u3001\u4e2d\u95f4\u3001\u540e)
 *
 *Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *
 *
 *\u4f8b\u5b50\uff1a onblur="trimAllBlank(document.form1.ToAccountNo)"
 */
function trimAllBlank(inputname)
{
	var result=inputname.value.replace(/(\s)/g,"");
	inputname.value=result;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5swift\u975e\u6cd5\u5b57\u7b26  ` ~ ! @ # $ % ^ & * _ = [ ] { } ; " < > | \ : -
 *         \u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u4e0d\u5408\u6cd5
 *        true -- \u5408\u6cd5
 *
 * \u4f8b\uff1acheck_swift('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_swift('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_swift(inputname,msg)
{
  var pattern;
	pattern = "^[^`~!@#\\$%\\^&\\*_=\\[\\]{};\\\"<>\\|\\\\:-]*$";
	if(inputname.indexOf("|")==-1)
  {
       inputobj=eval(CONST_STRDOC+inputname);
       inputvalue=inputobj.value;
      
       if(inputvalue.length==0)
           return true;
       return regex_match(inputname,msg,pattern);
  }
  
  var split_inputname=inputname.split(".");
  var split_inputs=split_inputname[1].split("|");
  var split_msg=msg.split("|");
  var errmsg="";
  
  for (var i=0;i<split_inputs.length;i++)
  {
 
      inputobj=eval(CONST_STRDOC+split_inputname[0]+"."+split_inputs[i]);
      inputvalue=inputobj.value;
      
      if(inputvalue.length==0){
          continue;
      }else if(!regex_match(split_inputname[0]+"."+split_inputs[i],split_msg[i],pattern)){
          return false;		
      }
  }
  
  return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u5b57\u6bcd\u3001\u6570\u5b57,\u5411\u7528\u6237\u53d1\u51fa\u63d0\u793a
 *
 * Parameter inputname -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u82f1\u6587\u540d;
 *           msg -- \u8868\u5355\u57df\u6587\u672c\u6846\u7684\u4e2d\u6587\u6807\u8bc6\u4e3a\u7528\u6237\u63d0\u4f9b\u63d0\u793a\u4fe1\u606f;
 *
 * Return false --\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u4ee5\u5916\u7684\u5b57\u7b26
 *        true -- \u4e0d\u5305\u542b
 *
 * \u4f8b\uff1acheck_letter_num('Form1.Input1','\u5b57\u6bb51');
 * \u4f8b\uff1acheck_letter_num('Form1.Input1|Input2|Input3','\u5b57\u6bb51|\u5b57\u6bb52|\u5b57\u6bb53');
 *
 */
function check_letter_num(inputname,msg) {
	return regex_match(inputname,msg,"^[ A-Za-z0-9]*$");
}

//**************************************
//***  FORM\u8868\u5355\u68c0\u67e5\u51fd\u6570\u7ed3\u675f
//**************************************
