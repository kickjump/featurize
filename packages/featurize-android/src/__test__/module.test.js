import main from '../';

describe('initial tests', () => {
  it('should call the index file', () => {
    expect(main()).toBe(undefined);
  });
});
