//Button External Link
var ext_link = document.getElementById("external_link");

ext_link.addEventListener("click",
	function(event) {
		var is_sure = confirm("This link will take you to an external page. Are you sure you want to leave?");
		if (is_sure === false) {
			event.preventDefault(); //this prevents the default click behavior of sending someone away from your site
			alert("Okay! You can stay.");
		}
	}, false
);
