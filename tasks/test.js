import { runCLI } from 'jest';
import yargs from 'yargs';

const { argv } = yargs;

export default (opts = {}) => () => {
  const env = process.env.NODE_ENV;
  process.env.NODE_ENV = 'test';
  process.env.PUBLIC_URL = '';
  argv.projects = [process.cwd()];
  opts = { ...argv, _: argv._.slice(1), ...opts };

  if (process.env.CI) {
    opts.watch = false;
  }

  return runCLI(opts, opts.projects, () => (process.env.NODE_ENV = env));
};
