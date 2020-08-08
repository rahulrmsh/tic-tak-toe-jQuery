$(document).ready(function () {
	$('#btn1').click(function(){
		$("#test1").text(function(i, origin){
			return "Old Text : " + origin + " New Text : Super rahul "+ i;
		});
	});
	$('#btn2').click(function(){
		$("#test2").text(function(i, origin){
			i = i+1;
			return "Old Html : " + origin + " New Html : Super rahul "+ i;
		});
	});
});