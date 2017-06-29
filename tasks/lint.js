import eslint from 'gulp-eslint';
import { src } from 'gulp';

export default (opts = {}) => () => {
  const lint = src([
    'gulpfile.babel.js',
    'tasks/**/*.js',
    'packages/*/src/**/*.js',
  ])
    .pipe(eslint({ ...opts }))
    .pipe(eslint.format());

  if (!opts.fix) {
    return lint.pipe(eslint.failAfterError());
  }
  return lint;
};
