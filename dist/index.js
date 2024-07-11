"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var react_loader_exports = {};
__export(react_loader_exports, {
  Download: () => Download,
  Excel: () => Excel,
  PDF: () => PDF,
  StrToByte: () => StrToByte,
  ZipSave: () => ZipSave
});
module.exports = __toCommonJS(react_loader_exports);

// components/FileSaver.ts
function PDF(blob, name = "Download") {
  const data = Uint8Array.from(atob(blob), (c) => c.charCodeAt(0));
  const file = new Blob([data], { type: "application/pdf" });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}
function Excel(blob, name = "Download") {
  try {
    if (!/^[A-Za-z0-9+/=]*$/.test(blob)) {
      throw new Error("The string to be decoded is not correctly encoded.");
    }
    const data = Uint8Array.from(atob(blob), (c) => c.charCodeAt(0));
    const file = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
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
function Download(blob, name = "Download") {
  const file = new Blob(blob);
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}
function StrToByte(str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}
function ZipSave(blob, name = "Download") {
  const file = new Blob([blob], { type: "application/gzip" });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Download,
  Excel,
  PDF,
  StrToByte,
  ZipSave
});
