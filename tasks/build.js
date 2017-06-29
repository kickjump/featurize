import { dest, src } from 'gulp';
import babel from 'gulp-babel';
import mergeStreams from 'merge-stream';

const packages = ['droid', 'testing'];

/**
 * get the source of the named package directory
 * @param {String} name
 * @return {String}
 */
const getSource = name => `./packages/${name}/src/**/*.js`;

const getDest = name => `./packages/${name}/lib`;

export default () => {
  const streams = packages.map(name =>
    src(getSource(name))
      .pipe(babel({ ignore: ['__test__/', '*.test.js'] }))
      .pipe(dest(getDest(name))),
  );

  return mergeStreams(...streams);
};
