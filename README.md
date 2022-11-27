# Download File from Bytes

can be used in react, next js, javascript.

## Installation

### 1. create function base64ToArrayBuffer
this function for converted base64 bytes to array buffers.

```javascript
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
```

### 2. create function to save file
this function for download file as pdf.

```javascript
function saveByteArray(title, byte) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = title;
    link.download = fileName;
    link.click();
};

```
### 3. usage
```javascript
 var sample_arr = base64ToArrayBuffer(data);
 saveByteArray("Download Report", sample_arr);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Sumber
https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript
