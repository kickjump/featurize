import git from 'gulp-git';

export default done => {
  git.pull('origin', 'master', { args: '--rebase' }, err => {
    done(err);
  });
};
