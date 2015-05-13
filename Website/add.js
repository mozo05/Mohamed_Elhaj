$(document).ready(function(){
	$("#add_li").click(function(){
		$("ol").append("<li><strong>Mohamed Elhaj</strong></li>");
	})
	$("#remove_li").click(function(){
		$("li:last").remove();
	})
})