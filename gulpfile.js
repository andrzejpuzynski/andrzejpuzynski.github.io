const { watch, series, srd, dest } = require('gulp');
const server = require('browser-sync').create();

function serve(done) {
	server.init({
		server: {
			baseDir: '.'
		}
	});
	done();
}

function reload(done) {
	server.reload();
	done();
}

function watchFiles(done) {
	serve(done);
	watch('**/*.*', { events: 'all' }, series(reload));
}

exports.default = watchFiles;