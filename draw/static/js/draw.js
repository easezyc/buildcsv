var data;
var backnews="fail";
	$(document).ready(function()
	{
		$('#uploadify').uploadify( {
		'swf' : '/static/uploadify/uploadify.swf',//上传按钮的图片，默认是这个flash文件
		'uploader' : "/add/",//上传所处理的服务器
		'folder' : '/static/images/users',//上传后，所保存文件的路径
		'queueID' : 'fileQueue',//上传显示进度条的那个div
		'buttonText' : '请选择文件',
		progressData : 'percentage',
		'auto' : true,
		'multi' : false,
		'onUploadSuccess' : function(arg0,data,arg2) {
					if(data=='no')
					{
						alert("请上传csv文件");
					}
					else{
						var jsonData = JSON.parse(data);
						data=jsonData;
						giveval(data);
					}
				},
		'onDisable' : function() {
			alert('uploadify is disable');
		},
		'onError' : function(errorType,errObj) {
			alert('The error was: ' + errObj.info)
		}
	});
	function giveval(d){
		data=d;
		$("#dataclasskey").empty();
		$("#dataclassnum").empty();
		str="<div>键：</div>";
		$("#dataclasskey").append(str);
		str="<div>值：</div>";
		$("#dataclassnum").append(str);
		for(var key in data){
			str="<div class=\"col-xs-12 col-sm-6\"><label><input type=\"radio\" name=\"data-type-key\" value="+key+">"+key+"</label></div>";
			$("#dataclasskey").append(str);
			str="<div class=\"col-xs-12 col-sm-6\"><label><input type=\"radio\" name=\"data-type-num\" value="+key+">"+key+"</label></div>";
			$("#dataclassnum").append(str);
		}
	}
}); 
$(document).ready(function(){
	$("#draw").click(function(){
		var phototype=0;
		if(data){
			phototype=$('input:radio[name="photo-type"]:checked').val();
			if(!($("input[name='data-type-key']:checked").length==1&&$("input[name='data-type-num']:checked").length==1)){
				alert("请选择数据");
			}
			else{
				
					pie();
			}
				
			
		}
		else{
			alert("请先上传文件");
		}
		return false;
	});
}); 