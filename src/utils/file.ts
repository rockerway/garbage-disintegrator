import fs = require('fs');

export function readFile(path: string): string {
  if (!isFileExist(path)) {
    throw new Error(`file: '${path}' does not exist.`);
  }

  return fs.readFileSync(path).toString();
}

export function writeFile(path: string, text: string): void {
  if (isFileExist(path)) {
    throw new Error(`file: '${path}' already exist.`);
  }

  fs.writeFileSync(path, text);
}

function isFileExist(path: string): boolean {
  return fs.existsSync(path);
}
