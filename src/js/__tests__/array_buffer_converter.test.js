import ArrayBufferConverter from '../array_buffer_converter';
import getbuffer from '../getbuffer';

test('should return an object', () => {
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(ArrayBufferConverter.load(getbuffer())).toBe(result);
});
