import { uniqueId, throttle } from '../helper';

jest.useFakeTimers();

describe('Testing helper functions', () => {
  it('Should return a unique ID type of string', () => {
    const id = uniqueId();
    expect(typeof id).toBe('string');
  });
});

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = throttle(func, 1000);
  });

  test('execute just once', () => {
    for (let i = 0; i < 100; i += 1) {
      debouncedFunc();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
