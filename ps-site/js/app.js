// $('body').on('submit', '.events-listserv-form', function(e) {
// 	e.preventDefault();
// 	$.ajax({
// 		type : "POST",
// 		url : "form.php",
// 		data : data_string,
// 		beforeSend : function() {
// 			$('#ctc-fm-msg').html('<img src="images/ajax-loader.gif">');
// 		},
// 		success : function(data) {
// 			alert('success');
// 			if (data.success) {
// 				$('#ctc-fm-msg').html("Message sent. :) ");
// 			} else {
// 				$('#ctc-fm-msg').html('' + data.error);
// 			}
// 		}
// 	});
// })
$('.events-listserv-form').submit(function(e) {
	e.preventDefault();
	var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
	var email = $('#list-fm-email').val();
	var submit = true;
	//Checks email is a real email
	if (!email_check.test(email)) {
		$('#list-fm-email').addClass('error');
		$('#list-fm-email-lbl').addClass('error');
		submit = false;
	} else {
		$('#list-fm-email').removeClass('error');
		$('#list-fm-email-lbl').removeClass('error');
	}
	//Submit form
	var data_string = 'type=join' + '&email=' + email;
	if (submit) {
		$.ajax({
			type : "POST",
			url : "form.php",
			data : data_string,
			// beforeSend : function() {
			// 	$('#ctc-fm-msg').html('<img src="images/ajax-loader.gif">');
			// },
			success : function(data) {
				if (data.success) {
					$('#ctc-fm-msg').html("Message sent. :) ");
				} else {
					$('#ctc-fm-msg').html('' + data.error);
				}
			},
			error: function(xhr, status, error) {

			},
			complete: function(data) {
				console.log(data.responseJSON.success);
			}
		});
	}
})