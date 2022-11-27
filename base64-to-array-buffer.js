function base64ToArrayBuffer(base64) {
   var binaryString = window.atob(base64);
   var binaryLen = binaryString.length;
   var bytes = new Uint8Array(binaryLen);
   for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
   }
   return bytes;
}

export default base64ToArrayBuffer
