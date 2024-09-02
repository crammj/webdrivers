"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async.test.ts
describe('Asynchronous Code', () => {
    // Example with async/await
    test('should fetch data correctly using async/await', () => __awaiter(void 0, void 0, void 0, function* () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                return 'Fetched Data';
            });
        }
        const data = yield fetchData();
        expect(data).toBe('Fetched Data');
    }));
    // Example with a Promise
    test('should resolve a promise', () => {
        function fetchData() {
            return Promise.resolve('Fetched Data');
        }
        return expect(fetchData()).resolves.toBe('Fetched Data');
    });
    // Example with done callback
    test('should fetch data correctly using done callback', (done) => {
        function fetchData(callback) {
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
