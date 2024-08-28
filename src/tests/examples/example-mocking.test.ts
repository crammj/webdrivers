// mock.test.ts
describe("Mock Functions", () => {
  test("should mock a function and check call counts", () => {
    const mockFn = jest.fn();

    mockFn();
    mockFn("argument");

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith("argument");
  });

  test("should mock a function and return a value", () => {
    const mockFn = jest.fn().mockReturnValue("Mocked Value");

    expect(mockFn()).toBe("Mocked Value");
  });
});
