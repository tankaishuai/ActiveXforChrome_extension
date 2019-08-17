//**************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u662fJS\u516c\u7528\u51fd\u6570
//**************************************
var CONST_STRDOC="document.";

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5220\u9664\u5de6\u53f3\u4e24\u7aef\u7684\u7a7a\u683c
 *
 */
String.prototype.trim = function()
{
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u8df3\u8f6c\u81f3\u5176\u4ed6\u9875\u9762
 *
 */
function gotoPage(url)
{
    location.href = url;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u8df3\u8f6c\u81f3\u5176\u4ed6\u9875\u9762,\u5e76\u4f20\u9875\u9762\u53c2\u6570
 *
 * Parameter url -- \u8df3\u8f6c\u7684\u94fe\u63a5;
 *           paraName -- \u8981\u4f20\u7684\u53c2\u6570\u7684\u53c2\u6570\u540d\u79f0;
 *           paraValue -- \u8981\u4f20\u7684\u53c2\u6570\u7684\u53c2\u6570\u503c;
 *
 * \u4f8b\uff1agotoPage('XXX.do','orderName','ActNo');
 *     gotoPage('XXX.do','orderName|orderName1|PageNum','ActNo|ibknum|3');
 *
 */
function gotoPageByPara(url,paraName,paraValue)
{
  var urlHavePara = false;

  if (url.indexOf("?") != -1)
    urlHavePara = true;

    if(paraName.indexOf("|") == -1)
      if (urlHavePara)
          location.href = url + "&" + paraName + "=" + paraValue ;
      else
        location.href = url + "?" + paraName + "=" + paraValue ;
    else
    {
        nameArr = paraName.split("|");
        paraArr = paraValue.split("|");

        var paraStr = "";

        for(var i = 0; i < nameArr.length; i++)
        {
            if (i == 0 && !urlHavePara)
                paraStr = "?" + nameArr[i] + "=" + paraArr[i];
            else
                paraStr += "&" + nameArr[i] + "=" + paraArr[i];
        }

        location.href = url + paraStr;
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u6570\u636e\u4e0b\u8f7d\u4f7f\u7528\uff0c\u4f7f\u7528topFrame\u4e0b\u8f7d
 *
 */
function dataDownload(url)
{
    parent.topFrame.location.href = url;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u6570\u636e\u4e0b\u8f7d\u4f7f\u7528\uff0c\u4f7f\u7528topFrame\u4e0b\u8f7d,\u5e76\u4f20\u9875\u9762\u53c2\u6570
 *
 * Parameter url -- \u8df3\u8f6c\u7684\u94fe\u63a5;
 *           paraName -- \u8981\u4f20\u7684\u53c2\u6570\u7684\u53c2\u6570\u540d\u79f0;
 *           paraValue -- \u8981\u4f20\u7684\u53c2\u6570\u7684\u53c2\u6570\u503c;
 *
 * \u4f8b\uff1adataDownloadByPara('XXX.do','orderName','ActNo');
 *     dataDownloadByPara('XXX.do','orderName|orderName1|PageNum','ActNo|ibknum|3');
 *
 */
function dataDownloadByPara(url,paraName,paraValue)
{
  var urlHavePara = false;

  if (url.indexOf("?") != -1)
    urlHavePara = true;

    if(paraName.indexOf("|") == -1)
      if (urlHavePara)
          parent.topFrame.location.href = url + "&" + paraName + "=" + paraValue ;
      else
        parent.topFrame.location.href = url + "?" + paraName + "=" + paraValue ;
    else
    {
        nameArr = paraName.split("|");
        paraArr = paraValue.split("|");

        var paraStr = "";

        for(var i = 0; i < nameArr.length; i++)
        {
            if (i == 0 && !urlHavePara)
                paraStr = "?" + nameArr[i] + "=" + paraArr[i];
            else
                paraStr += "&" + nameArr[i] + "=" + paraArr[i];
        }

        parent.topFrame.location.href = url + paraStr;
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u6253\u5370\u5f53\u524d\u9875\u9762,\u5e76\u5c4f\u853d\u6253\u5370\u6309\u94ae(\u5982\u679c\u5b58\u5728ID\u4e3aprintDiv\u7684DIV\u5219\u5c4f\u853d)
 *
 */
function printPage()
{
    var obj = eval(CONST_STRDOC + "all.printDiv")

    if (obj && obj.style)
    {
        obj.style.display = "none";
        window.print();
        obj.style.display = "";
    }
    else
        window.print();
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u7528\u67d0\u5b57\u7b26\u4e32\u66ff\u6362\u6307\u5b9a\u5b57\u7b26\u4e32\u4e2d\u7684\u67d0\u5b57\u7b26\u4e32
 *
 * Parameter str -- \u9700\u5904\u7406\u7684\u5e26\u6709\u5f85\u66ff\u6362\u5b57\u4e32\u7684\u5b57\u7b26\u4e32;
 *           str_s -- \u9700\u67e5\u627e\u7684\u5f85\u66ff\u6362\u7684\u5b57\u7b26\u4e32;
 *           str_d -- \u8fdb\u884c\u66ff\u6362\u7684\u5b57\u7b26\u4e32;
 *
 * Return \u5b57\u7b26\u4e32 -- \u66ff\u6362\u540e\u7684\u5b57\u7b26\u4e32
 *
 * \u4f8b\u5b50\uff1areplace("\u58f9\u4edf\u96f6\u96f6\u53c1","\u96f6\u96f6","\u96f6")
 *       \u8fd4\u56de\u5b57\u7b26\u4e32\uff1a\u58f9\u4edf\u96f6\u53c1
 */
function replace(str,str_s,str_d)
{
    var pos=str.indexOf(str_s);

    if (pos==-1)
        return str;

    var twopart=str.split(str_s);
    var ret=twopart[0];

    for(pos=1;pos<twopart.length;pos++)
        ret=ret+str_d+twopart[pos];

    return ret;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u53d6\u5f97\u8868\u5355\u4e2dradio\u7684\u503c
 *
 * Parameter str -- \u8868\u5355\u4e2dradio\u7684\u540d\u5b57;
 *
 * Return \u5b57\u7b26\u4e32 -- radio\u7684\u503c
 *
 * \u4f8b\u5b50\uff1agetRadioValue('form1.radio')
 *
 */
function getRadioValue(str)
{
  var obj = eval(CONST_STRDOC + str);

  if (!obj)
    return;

  if (!obj.length)
    return obj.value;
  else
  {
    for(var i = 0; i < obj.length; i++)
    {
      if (obj[i].checked)
      {
        return obj[i].value;
      }

    }
  }
}

//**************************************
//***  JS\u516c\u7528\u51fd\u6570\u7ed3\u675f
//**************************************

//**************************************/
//*******  \u8fdb\u5ea6\u6761\u5904\u7406\u51fd\u6570  begin  *******/
//**************************************/
/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u663e\u793a\u9875\u9762\u5904\u7406\u65f6\u7684\u8fdb\u5ea6\u6761\uff0c\u5e76\u63a7\u5236\u5f53\u524d\u9875\u9762\u7684\u4e8c\u6b21\u63d0\u4ea4\uff0c\u5728checkForm\u4e2d\u8c03\u7528\u3002
 */

function pageProcessing()
{
//  try {
//    processForm();
//  } catch (e) {
//    //alert("error: " + e.description);
//  }
  var processObj = document.all.processDiv;
  var processBlockObj = document.all.processBlockDiv;

    processObj.style.width = document.documentElement.scrollWidth;
    processObj.style.height = document.documentElement.scrollHeight;
  processObj.style.display = "";

    processBlockObj.style.left = (document.documentElement.clientWidth - parseInt(processBlockObj.style.width)) / 2 + document.documentElement.scrollLeft;
    processBlockObj.style.top = (document.documentElement.clientHeight - parseInt(processBlockObj.style.height)) / 2 + document.documentElement.scrollTop;

    disableAllSelect();

    /** 10\u5206\u949f\u540e\uff0c\u8fdb\u5ea6\u6761\u5931\u6548 */
    window.setTimeout("pageProcessingDone();",600000);
}

/** \u4e3a\u6bcf\u4e2a\u9875\u9762\u589e\u52a0\u9632\u7be1\u6539\u529f\u80fd added by fangxi  */
var processForm = (function () {
  if (typeof BocNet == undefined) {
  	//alert("BocNet not found........");
    return function() {};
  } else {
    //alert("BocNet defined...");
    var VAR1 = "_viewstate1", VAR2 = "_viewstate2";
    var f0 = function(m, key, value) { if (!m[key]) m[key] = []; m[key].push(value == null ? '' : String(value)); };
    var f1 = function(m, key, item) { f0(m, key, item.value); };
    var f2 = function(m, key, item) { if (item.checked) f0(m, key, item.value); };
    var f3 = function(m, key, item) { if (item.selectedIndex >= 0) $A(item.options).each(function(e) { if (e.selected) f0(m, key, e.value); }); };
    var ByType = { "text": f1, "password": f1, "hidden": f1, "radio": f2, "checkbox":f2, "select-one": f3, "select-multiple": f3 };
    var injector = function(m,item) { var key = String(item.name); if (!item.disabled && key && key != VAR1 && key != VAR2) { var f = ByType[item.type]; if (f) f(m, key, item); } return m; };
    return function() {
    	//alert("BocNet defined... " + $A(document.forms).length + " form(s) found...");
      $A(document.forms).each(function(theform) {
        var theform = $(theform), result = ["", ""];
        //alert("form: " + theform.name + " ... " + $A(theform.elements).length + " element(s) found...");
        $H($A(theform.elements).inject({}, injector)).each(function(pair) { if (result[0]) { result[0] += ","; result[1] += ","; } result[0] += pair.key; result[1] += pair.key + "=" + pair.value.join(""); });
        //alert(result[0] + "\r\n\r\n" + result[1]);
        var _viewstate1 = theform.getInputs("hidden", VAR1)[0]; if (!_viewstate1) _viewstate1 = BocNet.Form.createHidden(theform, VAR1);
        var _viewstate2 = theform.getInputs("hidden", VAR2)[0]; if (!_viewstate2) _viewstate2 = BocNet.Form.createHidden(theform, VAR2);
        _viewstate1.value = binl2b64(str2binl(result[0])); _viewstate2.value = b64_md5(result[1]);
      });
    }
  }
})();


/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u9875\u9762\u5904\u7406\u65f6\u7684\u8fdb\u5ea6\u6761\u663e\u793a\u5b8c\u6bd5\u540e\u8c03\u7528\uff0c\u53d6\u6d88\u63a7\u5236\u5f53\u524d\u9875\u9762\u7684\u4e8c\u6b21\u63d0\u4ea4\u3002
 */
function pageProcessingDone()
{
  var processObj = document.all.processDiv;
  var processBlockObj = document.all.processBlockDiv;

    processObj.style.width = "0";
    processObj.style.height = "0";
  processObj.style.display = "none";

    processBlockObj.style.left = "0";
    processBlockObj.style.top = "0";

    enableAllSelect();
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1adisable\u5f53\u524d\u9875\u7684\u6240\u6709\u4e0b\u62c9\u83dc\u5355
 */
function disableAllSelect()
{
    var obj = document.getElementsByTagName("SELECT");

  for(var i = 0; i < obj.length; i++)
  {
    obj[i].style.display = "none";
  }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1aenable\u5f53\u524d\u9875\u7684\u6240\u6709\u4e0b\u62c9\u83dc\u5355
 */
function enableAllSelect()
{
    var obj = document.getElementsByTagName("SELECT");

  for(var i = 0; i < obj.length; i++)
  {
    obj[i].style.display = "";
  }
}

//**************************************/
//*******  \u8fdb\u5ea6\u6761\u5904\u7406\u51fd\u6570  end    *******/
//**************************************/

//**************************************/
//*******  \u65e5\u671f\u5904\u7406\u51fd\u6570  begin    *******/
//**************************************/
/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c06\u65e5\u671f\u6570\u636e\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32
 *
 * Parameter datePara -- \u65e5\u671f\u578b\u6570\u636e;
 *       splitReg -- \u5206\u9694\u7b26
 *
 * Return \u6309\u7167\u5206\u9694\u7b26\u5206\u9694\u7684\u65e5\u671f\u5b57\u7b26\u4e32\u3002
 *
 */
function date2string(datePara,splitReg)
{
    var lMonth = datePara.getMonth() + 1;
    lMonth = (lMonth < 10 ? "0" + lMonth : lMonth);

    var lDate = datePara.getDate();
    lDate = (lDate < 10 ? "0" + lDate : lDate);

    return datePara.getFullYear() + splitReg + lMonth + splitReg + lDate;
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5f97\u5230\u65e5\u671f\u7684\u589e\u51cf
 *
 * Parameter strInterval -- d:\u6309\u5929;m:\u6309\u6708;y:\u6309\u5e74;
 *       dateStr -- \u8d77\u59cb\u65e5\u671f,date\u5bf9\u8c61\u6216\u8005yyyy/MM/dd\u683c\u5f0f
 *       Number -- \u65e5\u671f\u589e\u51cf\u7684\u91cf,\u652f\u6301\u6b63\u8d1f
 *
 * Return \u6309\u7167\u5206\u9694\u7b26\u5206\u9694\u7684\u65e5\u671f\u5b57\u7b26\u4e32\u3002
 *
 */
function addDate(strInterval, dateStr, numberPara)
{
    var dtTmp = new Date(Date.parse(dateStr));
    switch (strInterval)
    {
        case 'd' :
            return new Date(Date.parse(dtTmp) + (86400000 * numberPara));

        case 'm' :
            /** xulc modified:\u4fee\u6539\u4e86BUG\uff0c1\u670831\u65e5\u5f80\u540e\u4e00\u4e2a\u6708\u4e3a2\u670828\u65e5\uff0c\u4fee\u6539\u524d\u4e3a3\u67082\u65e5 */
            var oldY = dtTmp.getFullYear();
            /** \u6b32\u53d8\u66f4\u7684\u6708\u4efd */
            var newMon = dtTmp.getMonth() + numberPara;

            /** \u53d8\u66f4\u6708\u4efd\u540e\uff0c\u7cfb\u7edf\u751f\u6210\u7684DATE\u5bf9\u8c61 */
            var newDate = new Date(dtTmp.getFullYear(), newMon, dtTmp.getDate());

            /** \u53d6\u65b0\u7684DATE\u5bf9\u8c61\u4e2d\u7684\u5e74\u548c\u6708\uff0c\u6309\u7167JS\u7684\u5904\u7406\uff0c\u6b64\u65f61\u670831\u65e5\u5f80\u540e\u4e3a3\u67082\u65e5 */
            var tmpMon = newDate.getMonth();
            var tmpY = newDate.getFullYear();

            /** \u5982\u679c\u4e0d\u662f\u5927\u5c0f\u6708\u4ea4\u66ff\u65f6\u7684\u60c5\u51b5\uff0c\u5373\u65b0\u7684\u6708\u548c\u6b32\u53d8\u66f4\u7684\u6708\u4efd\u5e94\u8be5\u76f8\u7b49 || \u5982\u679c\u8de8\u5e74\uff0c\u4e24\u4e2a\u6708\u4efd\u4e5f\u4e0d\u76f8\u7b49\uff0c\u800c12\u6708\u548c1\u6708\u5747\u4e3a\u5927\u6708 */
            if (tmpMon == newMon || oldY != tmpY)
                return newDate;

            /** \u5982\u679c\u4e0d\u80fd\u76f4\u63a5\u8fd4\u56de\uff0c\u5219\u5c06\u9519\u8bef\u7684\u6708\u4efd\u5f80\u524d\u51cf\u5929\uff0c\u76f4\u9053\u627e\u5230\u4e0a\u6708\u7684\u6700\u540e\u4e00\u5929 */
            while(tmpMon != newMon)
            {
                newDate = new Date(newDate.getFullYear(), newDate.getMonth(), (newDate.getDate() - 1));
                tmpMon = newDate.getMonth();
            }

            return newDate;

        case 'y' :
            return new Date((dtTmp.getFullYear() + numberPara), dtTmp.getMonth(), dtTmp.getDate());
    }
}
//**************************************/
//*******  \u65e5\u671f\u5904\u7406\u51fd\u6570  end    *******/
//**************************************/

//**************************************/
//*******  \u4ee3\u7f34\u8d39\u5904\u7406\u51fd\u6570  begin  *******/
//**************************************/
/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5faa\u73af\u68c0\u67e5\u8868\u5355\u4e2d\u9700\u68c0\u67e5\u7684\u5143\u7d20
 *
 * Parameter
 *
 * Return false -- \u4e0d\u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *        true -- \u7b26\u5408\u8981\u6c42\u683c\u5f0f
 *
 */
function paysCheck()
{
  for(var i = 0; i < document.forms.length; i++)
  {
      var obj = document.forms[i];

      for(var j = 0; j < obj.elements.length; j++)
      {
          if (obj.elements[j].check && obj.elements[j].check != "")
          {
              var checkArr = obj.elements[j].check.split(",");

              for(var k = 0; k < checkArr.length; k++)
              {
                  var tmpStr = checkArr[k] + "(\"" + document.forms[i].name + "." + obj.elements[j].name + "\",\"" + obj.elements[j].checkName + "\")";

                  if (eval(tmpStr))
                      continue;
                  else
                      return false;
              }
          }
      }
  }

  return true;
}
//**************************************/
//*******  \u4ee3\u7f34\u8d39\u5904\u7406\u51fd\u6570  end    *******/
//**************************************/
