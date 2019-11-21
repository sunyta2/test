function readFile() {
	jQuery.get('input.txt', function (txt) {
		$('#output').text(txt);
	});
}

// git reset [commit]
// git reset --hard [commit]

