const base64toPDFDownladeable = (base64) => {
  const data64PDF = base64;
  const bufferArray = base64ToArrayBuffer(data64PDF);
  const blobStore = new Blob([bufferArray], { type: "application/pdf" });
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blobStore);
    return;
  }
  const data = window.URL.createObjectURL(blobStore);
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = data;
  link.download = coupon.nameExperience + ".pdf";
  link.click();
  window.URL.revokeObjectURL(data);
  link.remove();
};

const base64ToArrayBuffer = (data) => {
  const bString = window.atob(data);
  const bLength = bString.length;
  const bytes = new Uint8Array(bLength);
  for (var i = 0; i < bLength; i++) {
    var ascii = bString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
};
