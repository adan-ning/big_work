function login(){
		var username = document.getElementById("count").value;
		var userpwd = document.getElementById("pwd").value;
		if(username=="123456" && userpwd=="123"){
				window.location.href="index.html";
				alert("登录成功！！")
		}
		else{
			alert("登录失败！！请检测账号密码是否正确");
		}
	}
