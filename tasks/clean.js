import del from 'del';

export default () => del(['packages/*/lib', 'packages/*/es', 'coverage/**']);
