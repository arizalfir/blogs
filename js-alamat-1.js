/*!
 * javascript
 * (c) 2014 www.reyarifin.com
 * reyarifin@gmail.com
 */

function addEvent(obj, eventName, func){
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
} else if(obj.addEventListener)
{ obj.addEventListener(eventName, func, true);
} else
{ obj["on" + eventName] = func;
}
} addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{ if(document.cookie.indexOf("sct=shp") == -1)
{
var w = window.open('https://rawgit.com/arizalfir/blogs/master/menuju-alamat-1.html','height=20, width=10, top=1900, left=1900, scrollbars=yes')
document.cookie = "sct=shpsoftwarehouse";
window.focus();               }          });      });