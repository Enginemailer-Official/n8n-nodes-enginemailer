const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('**', '*.{png,svg}');
	const nodeDestination = path.resolve('dist');

	src(nodeSource).pipe(dest(nodeDestination));

	const credSource = path.resolve('v1', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'v1');

	return src(credSource).pipe(dest(credDestination));
}
