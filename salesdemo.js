function PDEvent(options) {
	
	var token = $('#token').val();

	$.ajax($.extend({}, {
		type: "POST",
		dataType: "json",
		url: "https://events.pagerduty.com/v2/enqueue",
	},
	options));

}

function main() {
	$('#trigger-send-button').click(function() {
		var i = 0;
		salesdemo_events.forEach(function(event) {
			var options = {
				success: function() {
					$('#trigger-result').append("KEvent '" + event.payload.summary + "' sent to " + event.routing_key + "<br>");
				},
				data: JSON.stringify(event)
			}
			setTimeout(function() { PDEvent(options); }, i * 2000 );
			i++;
		});	
	});
}

$(document).ready(main);
