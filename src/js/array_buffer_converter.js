export default class ArrayBufferConverter {
  static load(buffer) {
    const bufferView = new Uint16Array(buffer);
    let string = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      string += String.fromCharCode(bufferView[i]);
    }
    return string;
  }
}
