// setup-teardown.test.ts
let user: { name: string; age: number };

beforeEach(() => {
  user = { name: 'John Doe', age: 30 };
});

afterEach(() => {
  user = { name: '', age: 0 };

});

describe('Setup and Teardown', () => {
  test('should update the user name', () => {
    user.name = 'Jane Doe';
    expect(user.name).toBe('Jane Doe');
  });

  test('should update the user age', () => {
    user.age = 35;
    expect(user.age).toBe(35);
  });
});

