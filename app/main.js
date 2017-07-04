$(document).on('submit', '#contactForm', function(e) {
	e.preventDefault();
	var data = $(this).serializeArray();

	if (data[2].value.length > 1)
	{
		alert('Please fill out only the required fields.');
	}

	$.ajax({
		url: 'contact.php',
		content: data
	}).done(function(xhr) {
		console.log(xhr);	
	});

});

