function readFile() {
	jQuery.get('input.txt', function (txt) {
		$('#output').text(txt);
	});
}

// git reset [commit]
// git reset --hard [commit]

// this is added by other_github branch
