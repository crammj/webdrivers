 // async.test.ts
describe('Asynchronous Code', () => {
  // Example with async/await
  test('should fetch data correctly using async/await', async () => {
    async function fetchData() {
      return 'Fetched Data';
    }

    const data = await fetchData();
    expect(data).toBe('Fetched Data');
  });

  // Example with a Promise
  test('should resolve a promise', () => {
    function fetchData() {
      return Promise.resolve('Fetched Data');
    }

    return expect(fetchData()).resolves.toBe('Fetched Data');
  });

  // Example with done callback
  test('should fetch data correctly using done callback', (done) => {
    function fetchData(callback: (data: string) => void) {
      setTimeout(() => {
        callback('Fetched Data');
      }, 1000);
    }

    fetchData((data) => {
      expect(data).toBe('Fetched Data');
      done();
    });
  });
});

