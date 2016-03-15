$(document).ready(function () {
	(function ($, fbxstatus) {
		$.getJSON('fbxstatus.php', function (data) {		
			var fragment = fbxstatus.templates.status(data);
			$('#main').html(fragment);
		});
	}(jQuery, fbxstatus));
});