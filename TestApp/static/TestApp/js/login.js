$(document).ready(function(){
	$("#bt").click(function () {
		if ($("#username").val() == "admin" && $("#password").val() == "admin"){
			window.location.replace("dash");
		}
		else{
			$("#fail").show()
			$("#username").val("")
			$("#password").val("")
		}
	})
})