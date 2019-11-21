function readFile() {
	jQuery.get('input.txt', function (txt) {
		$('#output').text(txt);
	});
}
// this is added by other_github branch
