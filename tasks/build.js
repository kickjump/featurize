import { dest, src } from 'gulp';
import babel from 'gulp-babel';
import mergeStreams from 'merge-stream';

const packages = ['featurize-android'];

const ignore = ['./packages/*/src/**/*.test.js'];
const presets = ['env', 'stage-0', 'react'];
const esPresets = [['env', { modules: false }], 'stage-0', 'react'];
const babelrc = false;

/**
 * get the source of the named package directory
 * @param {String} name
 * @return {String}
 */
const getSource = name => [`./packages/${name}/src/**/*.js`, '!*.test.js'];

const getCommonJsDestination = name => `./packages/${name}/lib`;

const getESDestination = name => `./packages/${name}/es`;

export default () => {
  const commonJsStreams = packages.map(name =>
    src(getSource(name))
      .pipe(babel({ ignore, presets, babelrc }))
      .pipe(dest(getCommonJsDestination(name))),
  );

  const esStreams = packages.map(name =>
    src(getSource(name))
      .pipe(
        babel({
          ignore,
          presets: esPresets,
          babelrc,
        }),
      )
      .pipe(dest(getESDestination(name))),
  );

  const streams = [...commonJsStreams, ...esStreams];

  return mergeStreams(...streams);
};
