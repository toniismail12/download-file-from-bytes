function saveByteArray(title, byte) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = title;
    link.download = fileName;
    link.click();
};
