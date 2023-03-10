export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    if (buffer.byteLength !== length) {
      throw new Error();
    }
    const view = new DataView(buffer);
    view.setInt8(position, value);
    return view;
  } catch (e) {
    if (e instanceof RangeError) {
      throw new Error('Position outside range');
    }
  }
  return null;
}
