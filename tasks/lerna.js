import { spawn } from 'child_process';

export const lernaClean = () =>
  spawn('lerna', ['clean', '--yes'], { stdio: 'inherit' });

export const lernaBootstrap = () =>
  spawn('lerna', ['bootstrap'], { stdio: 'inherit' });

export const lernaPublish = () =>
  spawn('lerna', ['publish'], { stdio: 'inherit' });
