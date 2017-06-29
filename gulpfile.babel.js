import { lernaBootstrap, lernaClean, lernaPublish } from './tasks/lerna';
import { parallel, series, task } from 'gulp';
import build from './tasks/build';
import clean from './tasks/clean';
import flow from './tasks/flow';
import git from './tasks/git';
import lint from './tasks/lint';
import test from './tasks/test';

task('bootstrap', series(lernaBootstrap));
const bootstrapTask = task('bootstrap');
bootstrapTask.description = 'Bootstrap with Lerna.';

task('publish:lerna', series(lernaPublish));
const publishTask = task('publish:lerna');
publishTask.description = 'Publish with Lerna.';

task('clean', parallel(clean, lernaClean));
const cleanTask = task('clean');
cleanTask.description = 'Clean all builds.';

task('git:pull:rebase', series(git));
const gitPullRebaseTask = task('git:pull:rebase');
gitPullRebaseTask.description = 'Rebase and pull';

task('flow', series(flow));
const flowTask = task('flow');
flowTask.description = 'Type check using Flow.';

task('build', series(build));
const buildTask = task('build');
buildTask.description = 'Transform ES6 to CommonJS with BabelJS.';

task('lint', series(lint()));
const lintTask = task('lint');
lintTask.description = 'Lint all Packages.';

task('format', series(lint({ fix: true })));
const formatTask = task('format');
formatTask.description = 'Format and fix all source files.';

task('test', series(test({ watch: true })));
const testTask = task('test');
testTask.description = 'Run unit tests across all packages.';

task('test:coverage', series(test({ coverage: true })));
const testCoverageTask = task('test:coverage');
testCoverageTask.description =
  'Run unit tests across all packages and generate a coverage report.';

task('test:ci', series(test()));
const testCITask = task('test:ci');
testCITask.description = 'Run unit tests in a ci environment.';

task('check', series('lint', 'flow', 'test:coverage'));
const checkTask = task('check');
checkTask.description = 'Run checks on codebase.';

task('publish', series('git:pull:rebase', 'build', 'publish:lerna'));

task('setup', series('clean', 'bootstrap', 'build'));
