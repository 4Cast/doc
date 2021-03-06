var glob = require('glob');
var fs = require('fs');
var replace = require('replace');

// Find file(s)
glob('../docs/*.html', function (err, files) {
    if (err) { throw err; }
    files.forEach(function (item, index, array) {
        console.log(item + ' found');
        // Read file
        fs.readFileSync(item, 'utf8');
        // Find and Replace string
        replace({
            regex: 'href="',
            replacement: 'href="./',
            paths: [item],
            recursive: true,
            silent: true
        });
        replace({
            regex: 'src="',
            replacement: 'src="./',
            paths: [item],
            recursive: true,
            silent: true
        });
        replace({
            regex: 'base href=".//',
            replacement: 'base href="/doc/',
            paths: [item],
            recursive: true,
            silent: true
        });
        console.log('Replacement complete');
    });
});