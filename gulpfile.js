const { watch, series, src, dest } = require('gulp');
const server = require('browser-sync').create();
const less = require('gulp-less');

function serve(done) {
	server.init({
		server: {
			baseDir: '.'
		}
	});
	done();
}


function lessToCss() {
	return src('less/styles.less')
    .pipe(less())
	.pipe(dest('css/'));
}

function reload(done) {
	server.reload();
	done();
}

function watchFiles(done) {
	serve(done);
	watch('less/*.*', { events: 'all' }, series(lessToCss, reload));
	watch('**/*.*', { events: 'all' }, reload);
}

exports.default = watchFiles;
exports.lessToCss = lessToCss;
exports.reload = reload;