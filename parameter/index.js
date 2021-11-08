var params = getParameter();
$("#menu-category").val('modalshift');
if(params['cc']!==""){
    $("#menu-category").val(params['cc']);
}
 
function getParameter(){
  var paramsArray = [];
  var url = location.href; 
  parameters = url.split("#");
  if( parameters.length > 1 ) {
    url = parameters[0];
  }
  parameters = url.split("?");
  if( parameters.length > 1 ) {
    var params = parameters[1].split("&amp;");
    for ( i = 0; i < params.length; i++ ) {
       var paramItem = params[i].split("=");
       paramsArray[paramItem[0]] = paramItem[1];
    }
  }
  return paramsArray;
};