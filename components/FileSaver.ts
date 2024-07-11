

 function ImageSave(blob: string, name: string = "Download"): void {
  const data: Uint8Array = Uint8Array.from(atob(blob), (c: string) =>
    c.charCodeAt(0)
  );
  const file: Blob = new Blob([data], { type: "image/png" });
  const url: string = URL.createObjectURL(file);
  const anchor: HTMLAnchorElement = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}

 function PDF(blob: string, name = "Download") {
  const data = Uint8Array.from(atob(blob), (c) => c.charCodeAt(0));
  const file = new Blob([data], { type: "application/pdf" });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}

 function Excel(blob: string, name = "Download") {
  try {
    // Validate and sanitize the input blob
    if (!/^[A-Za-z0-9+/=]*$/.test(blob)) {
      throw new Error("The string to be decoded is not correctly encoded.");
    }

    // Decode the Base64 string
    const data = Uint8Array.from(atob(blob), (c) => c.charCodeAt(0));

    // Create a Blob from the decoded data
    const file = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `${name}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to download the Excel file:", error);
  }
}

 function Download(blob: any, name = "Download") {
  const file = new Blob(blob);
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}

 function StrToByte(str: string) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

 function ZipSave(blob: string, name = "Download") {
  const file = new Blob([blob], { type: "application/gzip" });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}

export { Download, ZipSave, ImageSave, StrToByte, Excel, PDF,}