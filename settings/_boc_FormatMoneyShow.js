//********************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u7528\u6765\u5904\u7406\u91d1\u989d\u683c\u5f0f,\u5e76\u663e\u793a\u60ac\u6d6e\u6846
//***  \u6ce8\u610f:\u5f15\u7528\u6b64js\u6587\u4ef6\u65f6,\u5fc5\u987b\u5f15\u7528common.js\u548cformCheck.js
//********************************************
//Begin dHTML Toolltip Timer
var tipTimer;
//End dHTML Toolltip Timer

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u683c\u5f0f\u5316\u91d1\u989d\uff08\u5343\u4f4d\u5206\u9694\u7b26\uff09
 *
 * Parameter txtObj -- \u9875\u9762\u4e2d\u8f93\u5165\u91d1\u989d\u7684\u6587\u672c\u6846\u5bf9\u8c61;
 *           formatFlag -- \u662f\u5426\u683c\u5f0f\u5316,true\uff1a\u683c\u5f0f\u5316;false\uff1a\u4e0d\u683c\u5f0f\u5316;
 *           curCode -- \u8d27\u5e01\u4ee3\u7801;
 *
 * \u4f8b\u5b50\uff1aonBlur="formatMoney(this,true,'001')" onFocus="formatMoney(this,false,'001')"
 *
 */
function formatMoney(txtObj,formatFlag,curCode)
{
    var money = txtObj.value; 
    money = isnumber(money);

    if (money != "a")
    {
        money=money.toString();

        if (money.indexOf(",")>0)
            money = replace(money,",","");//\u5bf9\u586b\u5199\u8fc7\u7684\u91d1\u989d\u8fdb\u884c\u4fee\u6539\u65f6\uff0c\u5fc5\u987b\u8fc7\u6ee4\u6389','	
        
        s = money;
        
        if (s.indexOf("\u3000")>=0)
            s = replace(money,"\u3000","");
        
        if (s.indexOf(" ")>=0)
            s = replace(money," ",""); 
        
        if (s.length!=0)
        {
            var str = changePartition(s,curCode);
            
            if (!formatFlag)
                str = replace(str,",","");
                
            txtObj.value = str;
            
            if (!formatFlag)
                txtObj.select();
        }	
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u9690\u85cf\u60ac\u6d6e\u7a97\u53e3\uff08\u5927\u5199\u91d1\u989d\uff09
 *
 * Parameter txtObj -- \u9875\u9762\u4e2d\u60ac\u6d6e\u7a97\u53e3\uff08\u5927\u5199\u91d1\u989d\uff09\u7684\u6587\u672c\u6846\u5bf9\u8c61;
 *           curCode -- \u8d27\u5e01\u4ee3\u7801;
 *
 * \u4f8b\u5b50\uff1a onMouseOut="hideTooltip('dHTMLToolTip','001')"
 * 
 */
function hideTooltip(object,curCode)
{
    /** \u4ec5\u5bf9\u4eba\u6c11\u5e01\u6709\u6548 */
    if (curCode == "001")
    {
        if (document.all)
        {
            locateObject(object).style.visibility="hidden";
            locateObject(object).style.left = 1;
            locateObject(object).style.top = 1;
            return false;
        }
        else if (document.layers)
        {
            locateObject(object).visibility="hide";
            locateObject(object).left = 1;
            locateObject(object).top = 1;
            return false;
        }
        else
            return true;
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u6821\u9a8c\u4ed8\u6b3e\u91d1\u989d\u5e76\u4e14\u5c06\u91d1\u989d\u8f6c\u5316\u4e3a\u6c49\u5b57\u5927\u5199
 *
 * Parameter txtObj -- \u9875\u9762\u4e2d\u8f93\u5165\u91d1\u989d\u7684\u6587\u672c\u6846\u5bf9\u8c61;
 *           str -- \u6d6e\u52a8\u6846\u4e2d\u7684\u6807\u9898
 *           divStr -- \u6d6e\u52a8\u6846\u7684ID\u3002
 *           curCode -- \u8d27\u5e01\u4ee3\u7801;
 *
 * \u4f8b\u5b50\uff1aonMouseOver="touppercase(this,'\u4ed8\u6b3e\u91d1\u989d','dHTMLToolTip','001')"
 *       onMouseOver="touppercase(document.form1.txtInput,'\u4ed8\u6b3e\u91d1\u989d','dHTMLToolTip','001')" 
 * 
 */
function touppercase(txtObj,str,divStr,curCode)
{
    /** \u4ec5\u5bf9\u4eba\u6c11\u5e01\u6709\u6548 */
    if (curCode == "001")
    {
        var money=txtObj.value;
        
        money = isnumber(money);

        //alert("money is:" + money);    
        if (money != "a")
        {
            s = money.toString();	
            s = replace(s,",","");//\u5bf9\u586b\u5199\u8fc7\u7684\u91d1\u989d\u8fdb\u884c\u4fee\u6539\u65f6\uff0c\u5fc5\u987b\u8fc7\u6ee4\u6389','
    
            s=changeUppercase(s);
            showTooltipOfLabel(divStr,event,str,s); 
        }
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u663e\u793a\u5e26\u6807\u9898\u7684\u60ac\u6d6e\u6846
 *
 * Parameter divStr -- \u9875\u9762\u4e2d\u5b9a\u4e49\u7684\u6d6e\u52a8\u663e\u793a\u5c42ID;
 *           e  --  \u901a\u5e38\u9ed8\u8ba4\u4f20\u5165\u53c2\u6570\u4e3aevent;
 *           jelabel -- \u6d6e\u52a8\u6846\u4e2d\u7684\u6807\u9898;
 *           jestr -- \u91d1\u989d\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1ashowTooltipOfLabel('dHTMLToolTip',event,'\u624b\u7eed\u8d39','12345');
 * 
 */
function showTooltipOfLabel(divStr,e,jelabel,jestr)
{
    window.clearTimeout(tipTimer);

/*    if (document.all)
    {
        locateObject(obj).style.top = document.body.scrollTop + event.clientY + 20;
        locateObject(obj).innerHTML = '<table width=200 height=10 border=1 style="font-family: \u5b8b\u4f53; font-size: 10pt; border-style: ridge; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"  cellspacing=1 cellpadding=1 bgcolor=#fef5ed bordercolor=#a03952><tr style="color:black"><td height=10 align=right nowrap>&nbsp;'+jelabel+'&nbsp;</td><td height=10 nowrap>&nbsp;'+jestr+'&nbsp;</td></tr></table>';

        if ((e.x + locateObject(obj).clientWidth) > (document.body.clientWidth + document.body.scrollLeft))
            locateObject(obj).style.left = (document.body.clientWidth + document.body.scrollLeft) - locateObject(obj).clientWidth-10;
        else
            locateObject(obj).style.left=document.body.scrollLeft+event.clientX;
            
        locateObject(obj).style.visibility="visible";
        
        tipTimer=window.setTimeout("hideTooltip('"+obj+"')", 5000);
        return true;
    }
    else
        return true;
*/
	var divObj = eval(divStr);
	
    if (document.all)
    {
        divObj.style.top = document.documentElement.scrollTop + event.clientY + 10;
        divObj.innerHTML = '<table border=1 style="font-family: \u5b8b\u4f53; font-size: 10pt; border-style: ridge; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px;" cellspacing=1 cellpadding=1 bgcolor=#fef5ed bordercolor=#a03952><tr style="color:black"><td  style="padding-top:4px;" align=right nowrap>&nbsp;'+jelabel+'&nbsp;</td><td style="padding-top:4px;" nowrap>&nbsp;'+jestr+'&nbsp;</td></tr></table>';
		
        if ((e.x + divObj.clientWidth) > (document.documentElement.clientWidth + document.documentElement.scrollLeft))
            divObj.style.left = (document.documentElement.clientWidth + document.documentElement.scrollLeft) - divObj.clientWidth-10;
        else
            divObj.style.left=document.documentElement.scrollLeft+event.clientX;
            
        divObj.style.visibility="visible";
        
        tipTimer = window.setTimeout("hideTooltip('" + divStr + "')", 5000);
        return true;
    }
    else
        return true;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5224\u65ad\u91d1\u989d\u7684\u5408\u6cd5\u6027
 *
 * Parameter onestring -- \u9700\u5224\u65ad\u7684\u5b57\u7b26\u4e32;
 *
 * Return 0 -- \u5b57\u7b26\u4e32\u4e3a\u7a7a
 *        a -- \u5b57\u7b26\u4e32\u975e\u6570\u503c\u6570\u636e
 *        \u6570\u503c -- \u5b57\u7b26\u4e32\u4e3a\u6570\u503c\u6570\u636e\uff0c\u8fd4\u56de\u5b57\u7b26\u4e32\u6570\u503c
 *
 * \u4f8b\uff1amoneyCheck("123,456,789.34")  \u8fd4\u56de123456789.34
 *
 */
function isnumber(onestring)
{
    if(onestring.length==0)
        return "a";
    
    if(onestring==".")
        return "a";
    
    var regex = new RegExp(/(?!^[+-]?[0,]*(\.0{1,4})?$)^[+-]?(([1-9]\d{0,2}(,\d{3})*)|([1-9]\d*)|0)(\.\d{1,4})?$/);
    
    if (!regex.test(onestring))
        return "a";

    //trim head 0
    /*while(onestring.substring(0,1)=="0")
    {
        onestring = onestring.substring(1,onestring.length);	
    }*/
    
    if (onestring.substring(0,1)==".")
        onestring = "0" + onestring;	
    
    onestring = replace(onestring,",","");
    
    var split_onestr=onestring.split(".");

    if(split_onestr.length>2)
        return "a";
    
    return onestring;
}


function locateObject(n, d) 
{ //v3.0
    var p,i,x;
    
    if (!d) 
        d=document;
    
    if ((p=n.indexOf("?"))>0 && parent.frames.length)
    {
        d = parent.frames[n.substring(p+1)].document;
        n=n.substring(0,p);
    }
        
    if (!(x=d[n]) && d.all) 
        x = d.all[n]; 
    
    for (i = 0; !x && i < d.forms.length; i++)
        x = d.forms[i][n];
    
    for (i = 0; !x && d.layers && i < d.layers.length; i++)
        x = locateObject(n,d.layers[i].document);
    
    return x;
}

