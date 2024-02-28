$(document).ready(function() {
	// load messages on page load
	loadMessages();

	// submit message form
	$('#message-form').submit(function(e) {
		e.preventDefault();
		sendMessage();
	});

	// refresh chat every 5 seconds
	setInterval(function() {
		loadMessages();
	}, 5000);
});

function loadMessages() {
	$.ajax({
		url: 'get_messages.php',
		type: 'GET',
		success: function(response) {
			$('#chat-area').html(response);
			scrollToBottom();
		}
	});
}

function sendMessage() {
	var message = $('#message-input').val();
	if (message.trim() == '') {
		alert('Please enter a message.');
		return;
	}

	$.ajax({
		url: 'send_message.php',
		type: 'POST',
		data: { message: message },
		success: function(response) {
			loadMessages();
			$('#message-input').val('');
		}
	});
}

function scrollToBottom() {
	$('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
}