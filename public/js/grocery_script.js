$(function() {   // when document is ready
console.log("ready");
//check that username entered is email address
$('#grocery-formb').click(addGrocery);	
$(document).ready(getGroceries);
});
function addGrocery(){
	console.log("----  IN ADD Grocery SCRIPT ---- ")
	$.ajax({
			url: "addGrocery",
			type: "put",
			data: {
				name: $("#name").val(),
				quantity: $("#quantity").val()
			},
			success: function(data) {
				message = $("#quantity").val() + " " + $("#name").val() + " has been added!"
				$('#test').html(message);
				$('#name').val("");
				$('#quantity').val("");
			}
	});
	return false;	
}
function getGroceries(){
	console.log("----  IN Get Groceries SCRIPT---- ")
	$.ajax({
			url: "getGrocerylist",
			type: "get",
			data: {},
			success: function(data) {
				message = data
				$('#grocery-item').html(message);
			}
	});
	return false;	
}