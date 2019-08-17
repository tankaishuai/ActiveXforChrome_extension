
//**************************************
//***  \u4ee5\u4e0b\u51fd\u6570\u662f\u9875\u9762\u9650\u5236\u51fd\u6570
//**************************************
/** 
 * \u9875\u9762\u9650\u5236\u5f00\u5173
 *     true -- \u5f00\u53d1\u6a21\u5f0f\uff0c\u9875\u9762\u4e0d\u505a\u9650\u5236
 *     false -- \u8fd0\u8425\u6a21\u5f0f\uff0c\u9875\u9762\u9650\u5236
 */
var codingMode = false;

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5c4f\u853d\u53f3\u952e
 */
function click(e)
{
    /** \u8868\u793aIE */
    if (document.all) 
    {
        if (event.button != 1)
        {
            oncontextmenu='return false';
        }
    }

    /** \u8868\u793aNC */
    if (document.layers) 
    {
        if (e.which == 3) 
        {
            oncontextmenu='return false';
        }
    }
}

/*
 * \u51fd\u6570\u529f\u80fd\uff1a\u5f53\u952e\u76d8\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5c4f\u853d\u67d0\u4e9b\u952e\u548c\u7ec4\u5408\u952e
 */
function limitKey(e)
{
    /** \u8868\u793aNC,\u6ce8\u610f\uff1a\u9700\u6d4b\u8bd5 */
    if (document.layers) 
    {
        if (e.which == 17)
        {
            alert("\u64cd\u4f5c\u9519\u8bef.\u6216\u8bb8\u662f\u60a8\u6309\u9519\u4e86\u6309\u952e!");  
        }
        /** \u5c4f\u853d Alt(18)+ \u65b9\u5411\u952e \u2192  Alt+ \u65b9\u5411\u952e \u2190  */
        if (e.which == 18 && (e.which==37 || e.which == 39))
        { 
            alert("\u4e0d\u51c6\u4f60\u4f7f\u7528ALT+\u65b9\u5411\u952e\u524d\u8fdb\u6216\u540e\u9000\u7f51\u9875\uff01"); 
            e.returnValue=false; 
        } 
     
        /** \u5c4f\u853d F5(116) \u5237\u65b0\u952eCtrl(17) + R(82) */
        if (e.which == 116 || (e.which == 17 && e.which==82))
        {
            e.which=0; 
            e.returnValue=false; 
        } 
  
        /** \u5c4f\u853dTab(9) \u5c4f\u853dF11(122) \u5c4f\u853d Ctrl+n(78) \u5c4f\u853d shift(16)+F10(121) */
        if (e.which == 9 || e.which == 122 || (e.which == 17 && e.which==78) || (e.which == 16 && e.which==121))
        {
            e.which=0;
            e.returnValue=false;
        }
    }
    
    /** \u8868\u793aIE */
    if (document.all)
    {
        /** \u5c4f\u853d Alt+ \u65b9\u5411\u952e \u2192  Alt+ \u65b9\u5411\u952e \u2190  */
        if (window.event.altKey && (window.event.keyCode==37 || window.event.keyCode == 39))
        { 
            alert("\u4e0d\u51c6\u4f60\u4f7f\u7528ALT+\u65b9\u5411\u952e\u524d\u8fdb\u6216\u540e\u9000\u7f51\u9875\uff01"); 
            event.returnValue=false; 
        } 
     
        /** \u5c4f\u853d F5(116) \u5237\u65b0\u952eCtrl + R(82) */
        if (window.event.keyCode == 116 || (window.event.ctrlKey && window.event.keyCode==82))
        {
            event.keyCode=0; 
            event.returnValue=false; 
        } 

        /** \u5c4f\u853dEnter(13) */
        if (window.event.keyCode==13 && typeof(openEnterFlag)=='undefined' )
        /** openEnterFlag\u662f\u5728JSP\u4e2d\u6253\u5f00Enter\u7684\u5f00\u5173\u3002\u76ee\u524d\u5e94\u7528\u7684\u5c31\u53ea\u6709\u7559\u8a00\u677f\u9875\u9762 */
        /** \u4f7f\u7528\u65b9\u6cd5\uff1a\u5728\u9700\u8981\u6253\u5f00Enter\u7684\u9875\u9762tiles:insert\u524d\u5b9a\u4e49\u53d8\u91cfopenEnterFlag\u5373\u53ef */ 
        {
        	//alert("pagelimt 13");
            event.keyCode=0;
            event.returnValue=false;
        }

        /** \u5c4f\u853dF11(122) \u5c4f\u853d Ctrl+n(78) \u5c4f\u853d shift+F10(121) */
        if (window.event.keyCode == 122 || (window.event.ctrlKey && window.event.keyCode==78) || (window.event.shiftKey && window.event.keyCode==121))
        {
            event.keyCode=0;
            event.returnValue=false;
        }
        


        
        /** \u5c4f\u853d Ctrl + A(65) Ctrl + C(67) Ctrl + X(86) Ctrl + V(88) modify by jinj BOCNET-1769,\u653e\u5f00Ctrl + C,Ctrl + V*/
        if (window.event.ctrlKey && (window.event.keyCode==65 || window.event.keyCode == 88))
        {
        	event.keyCode=0;
            event.returnValue=false; 
        } 

        if (window.event.srcElement.tagName == "A" && window.event.shiftKey)  
            window.event.returnValue = false;             //\u5c4f\u853d shift \u52a0\u9f20\u6807\u5de6\u952e\u65b0\u5f00\u4e00\u7f51\u9875 
    }
}
if (!codingMode)
{
    if (document.layers) 
    {
        document.captureEvents(Event.MOUSEDOWN);
    }
    
    document.onmousedown=click;
    document.oncontextmenu = new Function("return false;");
    
    if (document.layers)
        document.captureEvents(Event.KEYDOWN);
    
    document.onkeydown=limitKey;

}
//**************************************
//***  \u9875\u9762\u9650\u5236\u51fd\u6570\u7ed3\u675f
//**************************************
