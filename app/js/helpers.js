Handlebars.registerHelper('date', function (timestamp, format) {
	try {
		var date = new Date(timestamp * 1000);
		return date_format(date, format);
	}
	catch(e) {
		return timestamp;
	}
});

Handlebars.registerHelper('uptime', function (time) {
	var d = Math.floor(time / 86400);
	var h = Math.floor(time % 86400 / 3600);
	var m = Math.floor(time % 3600 / 60);
	var s = Math.floor(time % 60);

	return (d > 0 ? d + ' jour'+ (d > 1 ? 's, ' : ', ') : '') + (h > 0 ? h + ' heure' + (h > 1 ? 's, ' : ', ') : '') + (m > 0 ? m + ' minute' + (m > 1 ? 's ' : '') : '');// + (s > 0 ? s + ' seconde' + (s > 1 ? 's' : '') : '');
});
