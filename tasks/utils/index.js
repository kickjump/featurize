import config from './config';
import { join } from 'path';

export const isWin = /^win/.test(process.platform);
export const isMacOS = /^darwin/.test(process.platform);

export const nodeModulesBinaryPath = command =>
  join(
    config.paths.base,
    './node_modules/.bin',
    isWin ? `${command}.cmd` : command,
  );
