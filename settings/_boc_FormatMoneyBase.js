//********************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u7528\u6765\u5904\u7406\u91d1\u989d\u5343\u5206\u4f4d\u663e\u793a\u53ca\u4eba\u6c11\u5e01\u5927\u5199
//********************************************

var pubarray1 = new Array("\u96f6","\u58f9","\u8d30","\u53c1","\u8086","\u4f0d","\u9646","\u67d2","\u634c","\u7396","");
var pubarray2 = new Array("","\u62fe","\u4f70","\u4edf");
var pubarray3 = new Array("\u5143","\u4e07","\u4ebf","\u5146","","");
var pubarray4 = new Array("\u89d2","\u5206");
var char_len = pubarray1[0].length; 

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u6839\u636e\u8d27\u5e01\u7801\u683c\u5f0f\u5316\u8f85\u5e01\u4f4d\u6570\uff0c\u4e0d\u8db3\u4f4d\u7684\u88650
 *
 * Parameter str -- \u9700\u5904\u7406\u7684\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32;
 *           curCode -- \u8d27\u5e01\u7801;
 *
 * Return \u5b57\u7b26\u4e32 -- \u683c\u5f0f\u5316\u540e\u7684\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1aformatDecimalPart("12345678","001");
 *       \u8fd4\u56de\u5b57\u7b26\u4e32\uff1a12345678.00
 * 
 */
function formatDecimalPart(str,curCode)
{
    var curDec;
    
    for(var j = 0; j < curCodeArr.length; j++)
    {
        if (curCodeArr[j][0] == curCode)
        {
            curDec = curCodeArr[j][3];
            break;
        }
    }
    
    if (str.indexOf(".") == -1)
    {
        var tmp = "";
        
        if (curDec == 0)
            return str;
            
        for(var i = 0; i < curDec; i++)
        {
            tmp += "0";
        }
        
        return str + "." + tmp;
    }
    else
    {
        var strArr = str.split(".");
        var decimalPart = strArr[1];
        
        while(decimalPart.length < curDec)
        {
            decimalPart += "0";
        }
        
        return strArr[0] + "." + decimalPart;
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c06\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32\u7528","\u8fdb\u884c\u5206\u9694,\u5e76\u4e14\u52a0\u4e0a\u5c0f\u6570\u4f4d(\u5904\u7406\u5343\u5206\u4f4d,\u5206\u5e01\u79cd)
 *
 * Parameter str -- \u9700\u5904\u7406\u7684\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32;
 *           curCode -- \u8d27\u5e01\u7801;
 *
 * Return \u5b57\u7b26\u4e32 -- \u683c\u5f0f\u5316\u540e\u7684\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1achangePartition("12345678");
 *       \u8fd4\u56de\u5b57\u7b26\u4e32\uff1a12,345,678.00
 * 
 */
function changePartition(str,curCode)
{
    var minus = "";
    
    if(str.substring(0,1) == "-")
    {    
        str = str.substring(1);
        minus = "-";
    }

    str = formatDecimalPart(str,curCode);

    var twopart = str.split(".");
    var decimal_part = twopart[1];
    

    //format integer part
    var integer_part="0";
    var intlen=twopart[0].length;
    
    if(intlen>0)
    {
        var i=0;
        
        integer_part=""; 
        
        while(intlen>3)
        {
            integer_part=","+twopart[0].substring(intlen-3,intlen)+integer_part;
            i=i+1;
            intlen=intlen-3;
        }
        
        integer_part=twopart[0].substring(0,intlen)+integer_part;
    }

    if (!decimal_part)
        return minus + integer_part;
    else
        return minus + integer_part + "." + decimal_part
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c06\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32\u5904\u7406\u6210\u5927\u5199\u7684\u4eba\u6c11\u5e01
 *
 * Parameter str -- \u9700\u5904\u7406\u7684\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32;
 *
 * Return \u5b57\u7b26\u4e32 -- \u683c\u5f0f\u5316\u540e\u7684\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1achangeUppercase("12345678.90")
 *       \u8fd4\u56de\u5b57\u7b26\u4e32\uff1a\u58f9\u4edf\u8d30\u4f70\u53c1\u62fe\u8086\u4e07\u4f0d\u4edf\u9646\u4f70\u67d2\u62fe\u634c\u5143\u7396\u89d2
 * 
 */
function changeUppercase(str)
{
    if(str=="" || eval(str)==0)
        return "\u96f6";
    
    if(str.substring(0,1) == "-")
    {    
        if(eval(str.substring(1)) < 0.01)
            return "\u91d1\u989d\u6709\u8bef!!";
        else
            str = str.substring(1);
    }
        
    var integer_part="";
    var decimal_part="\u6574";
    var tmpstr="";
    var twopart=str.split(".");
    
    //\u5904\u7406\u6574\u578b\u90e8\u5206\uff08\u5c0f\u6570\u70b9\u524d\u7684\u6574\u6570\u4f4d\uff09
    var intlen=twopart[0].length;
    
    if (intlen > 0 && eval(twopart[0]) != 0)
    {
        var gp=0;
        var intarray=new Array();
    
        while(intlen > 4)
        {
            intarray[gp]=twopart[0].substring(intlen-4,intlen);
            gp=gp+1;
            intlen=intlen-4;
        }
        
        intarray[gp]=twopart[0].substring(0,intlen);
    
        for(var i=gp;i>=0;i--)
        {
            integer_part=integer_part+every4(intarray[i])+pubarray3[i];
        }

        integer_part=replace(integer_part,"\u4ebf\u4e07","\u4ebf\u96f6");
        integer_part=replace(integer_part,"\u5146\u4ebf","\u5146\u96f6");	

        while(true)
        {
            if (integer_part.indexOf("\u96f6\u96f6")==-1)
                break;

            integer_part=replace(integer_part,"\u96f6\u96f6","\u96f6");
        }
        
        integer_part=replace(integer_part,"\u96f6\u5143","\u5143");

        /*\u6b64\u5904\u6ce8\u91ca\u662f\u4e3a\u4e86\u89e3\u51b3100000\uff0c\u663e\u793a\u4e3a\u62fe\u4e07\u800c\u4e0d\u662f\u58f9\u62fe\u4e07\u7684\u95ee\u9898\uff0c\u6b64\u6bb5\u7a0b\u5e8f\u628a\u58f9\u62fe\u4e07\u622a\u6210\u4e86\u62fe\u4e07
        tmpstr=intarray[gp];
    
        if (tmpstr.length==2 && tmpstr.charAt(0)=="1")
        {
            intlen=integer_part.length;
            integer_part=integer_part.substring(char_len,intlen);
        }
        */
    }
    
    //\u5904\u7406\u5c0f\u6570\u90e8\u5206\uff08\u5c0f\u6570\u70b9\u540e\u7684\u6570\u503c\uff09
    tmpstr="";
    if(twopart.length==2 && twopart[1]!="")
    {
        if(eval(twopart[1])!=0)
        {
            decimal_part="";
            intlen= (twopart[1].length>2) ? 2 : twopart[1].length;
            
            for(var i=0;i<intlen;i++)
            {
                tmpstr=twopart[1].charAt(i);
                decimal_part=decimal_part+pubarray1[eval(tmpstr)]+pubarray4[i];
            }
            
            decimal_part=replace(decimal_part,"\u96f6\u89d2","\u96f6");
            decimal_part=replace(decimal_part,"\u96f6\u5206","");
    
            if(integer_part=="" && twopart[1].charAt(0)==0)
            {
                intlen=decimal_part.length;
                decimal_part=decimal_part.substring(char_len,intlen);
            }
        }
    }
    
    tmpstr=integer_part+decimal_part;
    
    return tmpstr;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5bf9\u4f4d\u6570\u5c0f\u4e8e\u7b49\u4e8e4\u7684\u6574\u6570\u503c\u5b57\u7b26\u4e32\u8fdb\u884c\u4e2d\u6587\u8d27\u5e01\u7b26\u53f7\u5904\u7406
 *
 * Parameter str -- \u9700\u5904\u7406\u7684\u5e26\u6709\u6570\u5b57\u7684\u5b57\u7b26\u4e32;
 *
 * Return \u5b57\u7b26\u4e32 -- \u683c\u5f0f\u5316\u540e\u7684\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1aevery4("1234")
 *       \u8fd4\u56de\u5b57\u7b26\u4e32\uff1a\u58f9\u4edf\u8d30\u4f70\u53c1\u62fe\u8086
 * 
 */
function every4(str)
{
    var weishu=str.length-1;
    var retstr="";
    var shuzi;
    
    for (var i=0;i<str.length;i++) 
    {
        shuzi=str.charAt(i);
    
        if(shuzi=="0")
            retstr=retstr+pubarray1[eval(shuzi)];
        else
            retstr=retstr+pubarray1[eval(shuzi)]+pubarray2[weishu];
        
        weishu=weishu-1;
    }
    
    while(true)
    {
        if (retstr.indexOf("\u96f6\u96f6")==-1)
            break;
        
        retstr=replace(retstr,"\u96f6\u96f6","\u96f6");
    }
    
    if(shuzi=="0")
    {
        weishu=retstr.length-char_len;
        retstr=retstr.substring(0,weishu);
    }
    
    return retstr;
}

