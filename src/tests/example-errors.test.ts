// error.test.ts
describe('Error Handling', () => {
  function compileCode() {
    throw new Error('Compilation error');
  }

  test('should throw an error', () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error);
    expect(() => compileCode()).toThrow('Compilation error');
  });
});

