declare function PDF(blob: string, name?: string): void;
declare function Excel(blob: string, name?: string): void;
declare function Download(blob: any, name?: string): void;
declare function StrToByte(str: string): Uint8Array;
declare function ZipSave(blob: string, name?: string): void;

export { Download, Excel, PDF, StrToByte, ZipSave };
