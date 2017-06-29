import { nodeModulesBinaryPath } from './utils';
import { spawn } from 'child_process';

export default () =>
  spawn(nodeModulesBinaryPath('flow'), [], { stdio: 'inherit' });
