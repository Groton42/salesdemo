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
		salesdemo_events.forEach(function(event) {
			var options = {
				success: function() {
					$('#trigger-result').append("KEvent '" + event.dedup_key + "' sent to " + event.routing_key + "<br>");
				},
				data: JSON.stringify(event)
			}
			PDEvent(options);
		});	
	});
}

$(document).ready(main);
