// snapshot.test.ts
describe("Snapshot Testing", () => {
  test("should match the snapshot", () => {
    const user = { name: "John Doe", age: 30 };
    expect(user).toMatchSnapshot();
  });
});
