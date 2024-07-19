# justreact-advanced

`justreact-advanced` is an npm package designed to facilitate the downloading and saving of various types of files including CSV, ZIP, images, Excel, and PDF files. It provides a straightforward and efficient way to handle file downloads in React applications.

## Features

- **Download**: Download CSV files by passing an encoded string.
- **ZipSave**: Save files in a ZIP format.
- **ImageSave**: Save images.
- **StrToByte**: Convert strings to byte arrays.
- **Excel**: Save and download Excel files.
- **PDF**: Save and download PDF files.

## Installation

To install the package, run:

```bash
npm install justreact-advanced
yarn add justreact-advanced



```


# Usage
## Download CSV
### To download a CSV file, pass the encoded string to the Download function.

## Download
```js
import { Download } from 'justreact-advanced';

// Example CSV data encoded as a string
const csvData = 'data:text/csv;charset=utf-8,Name,Age\nJohn,30\nJane,25';

Download(csvData, 'example.csv');

```

## ZipSave
 To save files in a ZIP format:

```js
import { ZipSave } from 'justreact-advanced';

const files = [
  { name: 'file1.txt', content: 'Hello World' },
  { name: 'file2.txt', content: 'JustReact Advanced' }
];

ZipSave(files, 'example.zip');
```

## ImageSave
To save an image:

```js
import { ImageSave } from 'justreact-advanced';

// Example image URL
const imageUrl = 'https://example.com/image.png';

ImageSave(imageUrl, 'example.png');
```

## StrToByte
To convert a string to a byte array:

```js
import { StrToByte } from 'justreact-advanced';

const str = 'Hello World';
const byteArray = StrToByte(str);

console.log(byteArray);
```

## Excel
To save and download an Excel file:

```js
import { Excel } from 'justreact-advanced';

const data = [
  ['Name', 'Age'],
  ['John', 30],
  ['Jane', 25]
];

Excel(data, 'example.xlsx');
```

## PDF
To save and download a PDF file:

```js
import { PDF } from 'justreact-advanced';

// Example PDF content
const content = `
  <h1>Title</h1>
  <p>This is an example PDF document.</p>
`;

PDF(content, 'example.pdf');
```

## API

Download(encodedString, fileName)
encodedString (string): The encoded string to download.
fileName (string): The name of the file to save.
ZipSave(files, fileName)
files (Array): An array of objects with name and content properties.
fileName (string): The name of the ZIP file to save.
ImageSave(imageUrl, fileName)
imageUrl (string): The URL of the image to save.
fileName (string): The name of the image file to save.
StrToByte(str)
str (string): The string to convert to a byte array.
Excel(data, fileName)
data (Array): The data to include in the Excel file.
fileName (string): The name of the Excel file to save.
PDF(content, fileName)
content (string): The HTML content to include in the PDF file.
fileName (string): The name of the PDF file to save.
License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Acknowledgements
Special thanks to the contributors and the open-source community for their support.

## Contact
For any questions or feedback, please reach out at kumararvindra7691@gmail.com.

## Enjoy using justreact-advanced!
