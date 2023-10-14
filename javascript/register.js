function $(id){
	return document.getElementById(id);
}
function chickcount(){
	$("error_name").innerText = "";
	var username = $("count").value;
	if(username == "" || username == null){
		$("error_name").innerText = "用户名不能为空！";
		return;
	}
	if(username.length <4 || username.length >20){
		$("error_name").innerText = "长度在4-20之间！";
		return;
	}
	var namematch = /^[a-zA-Z][a-zA-Z0-9_]*$/;
	if(!username.match(namematch)){
		$("error_name").innerText = "只能以英文字母开头且组合位字母数字下划线！";
		return;
	}
	chick1=true;
	}
function chickpwd(){
	$("error_pwd").innerText = "";
	var userpwd = $("pwd").value;
	if(userpwd == "" || userpwd == null){
		$("error_pwd").innerText = "密码不能为空！";
		return;
	}
	if(userpwd.length <8 || userpwd.length >25){
		$("error_pwd").innerText = "长度在8-25之间！";
		return;
	}
	chick2=true;
}